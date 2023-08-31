import { getImage } from "astro:assets";

export async function generateSrcset(image: string, sizes: Array<number>) {
	let srcset: string = "";

	for (let i = 0; i < sizes.length; i++) {
		let optimizedImage = await getImage({
			src: image,
			width: sizes[i],
		});

		srcset += `${optimizedImage.src} ${sizes[i]}w`

		if (i < sizes.length - 1) {
			srcset += ", "
		}
	}

	return srcset;
}
