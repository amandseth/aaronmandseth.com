const darkThemeIcon16 = "/images/favicon_dark_16x16.png";
const darkThemeIcon32 = "/images/favicon_dark_32x32.png";
const darkThemeIcon48 = "/images/favicon_dark_48x48.png";
const lightThemeIcon16 = "/images/favicon_light_16x16.png";
const lightThemeIcon32 = "/images/favicon_light_32x32.png";
const lightThemeIcon48 = "/images/favicon_light_48x48.png";

async function makeFaviconLink(url: string, size: number) {
	let linkEl = document.createElement("link");
	linkEl.setAttribute("rel", "icon");
	linkEl.setAttribute("sizes", `${size}x${size}`);
	linkEl.setAttribute("href", url);
	document.head.appendChild(linkEl);
}

export default function setup() {
	if (!window.matchMedia) return;

	const matcher = window.matchMedia("(prefers-color-scheme:dark)");

	const onUpdate = function () {
		const icons = document.querySelectorAll(
			"head > link[rel='icon'], head > link[rel='shortcut icon']"
		);

		if (icons) {
			for (let i = 0; i < icons.length; i++) {
				icons[i].remove();
			}
		}

		if (matcher.matches) {
			makeFaviconLink(darkThemeIcon16, 16);
			makeFaviconLink(darkThemeIcon32, 32);
			makeFaviconLink(darkThemeIcon48, 48);
		} else {
			makeFaviconLink(lightThemeIcon16, 16);
			makeFaviconLink(lightThemeIcon32, 32);
			makeFaviconLink(lightThemeIcon48, 48);
		}
	};

	matcher.addEventListener("change", onUpdate);
	onUpdate();
}
