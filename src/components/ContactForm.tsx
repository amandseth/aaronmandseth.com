import { useState } from "preact/hooks";

interface Props {
	apiBaseUrl: string;
}

export function ContactForm({ apiBaseUrl }: Props) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isError, setIsError] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [extraField, setExtraField] = useState("");

	const formAction = `${apiBaseUrl}/v1.0/contact`;

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		if (isSubmitting) return;

		setIsError(false);
		setIsSubmitting(true);
		setDidSubmit(true);

		const formData = {
			name,
			email,
			message,
			extraField,
		};

		try {
			const response = await fetch(formAction, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			setIsSubmitting(false);
			if (!response.ok) throw new Error("Response status not OK");
		} catch {
			setIsSubmitting(false);
			setIsError(true);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div class="mb-4">
				<label
					for="contact-name"
					class="block font-bold text-brand-foreground"
				>
					Name <span class="ms-1 text-red-500">*</span>
				</label>
				<input
					type="text"
					id="contact-name"
					class="mt-2 w-full rounded bg-brand-background-darker px-3 py-2 shadow"
					value={name}
					onInput={(e) => setName(e.currentTarget.value)}
					required
					maxLength={50}
				/>
			</div>
			<div class="mb-4">
				<label
					for="contact-email"
					class="block font-bold text-brand-foreground"
				>
					Email <span class="ms-1 text-red-500">*</span>
				</label>
				<input
					type="email"
					id="contact-email"
					class="mt-2 w-full rounded bg-brand-background-darker px-3 py-2 shadow"
					value={email}
					onInput={(e) => setEmail(e.currentTarget.value)}
					required
					maxLength={100}
				/>
			</div>
			<div class="mb-4">
				<label
					for="contact-message"
					class="block font-bold text-brand-foreground"
				>
					Message <span class="ms-1 text-red-500">*</span>
				</label>
				<textarea
					id="contact-message"
					rows={10}
					class="mt-2 w-full rounded bg-brand-background-darker px-3 py-2 shadow"
					value={message}
					onInput={(e) => setMessage(e.currentTarget.value)}
					required
					maxLength={2000}
				></textarea>
			</div>
			<div class="mb-4 hidden">
				<label
					for="contact-extra"
					class="block font-bold text-brand-foreground"
				>
					If you can see this field, leave it blank.
				</label>
				<input
					type="text"
					id="contact-extra"
					class="mt-2 w-full rounded px-3 py-2 shadow"
					value={extraField}
					onInput={(e) => setExtraField(e.currentTarget.value)}
					maxLength={25}
				/>
			</div>
			<div class="text-right">
				<input
					type="submit"
					class={`mb-4 w-full whitespace-nowrap rounded-md bg-brand-background-darker px-5 py-3 text-base leading-none shadow-xl transition md:w-auto ${isSubmitting
							? "text-brand-foreground-darker"
							: "cursor-pointer text-brand-foreground hover:text-brand-highlight"
						}`}
					value="Submit"
					disabled={isSubmitting}
				/>
			</div>
			<div class="text-center transition-all">
				{isSubmitting && (
					<div class="inline-block" role="status">
						<svg
							aria-hidden="true"
							class="inline h-8 w-8 animate-spin fill-brand-highlight text-gray-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
				)}
				{!isSubmitting && didSubmit && (
					<span className={isError ? "text-red-500" : ""}>
						{isError
							? "There was an error sending your message"
							: "Your message was received, thanks!"}
					</span>
				)}
			</div>
		</form>
	);
}
