export function rotn(n: number, str: string) {
	var table: { [id: string]: string } = {};

	//A = 65, a = 97
	for (let i = 0; i < 26; i++) {
		table[String.fromCharCode(65 + i)] = String.fromCharCode(
			65 + ((i + n) % 26)
		);
		table[String.fromCharCode(97 + i)] = String.fromCharCode(
			97 + ((i + n) % 26)
		);
	}

	return str
		.split("")
		.map((c) => table[c] || c)
		.join("");
}
