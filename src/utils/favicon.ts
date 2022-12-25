const darkThemeIcon16 = await import("../images/favicon_dark_16x16.png");
const darkThemeIcon32 = await import("../images/favicon_dark_32x32.png");
const darkThemeIcon48 = await import("../images/favicon_dark_48x48.png");
const lightThemeIcon16 = await import("../images/favicon_light_16x16.png");
const lightThemeIcon32 = await import("../images/favicon_light_32x32.png");
const lightThemeIcon48 = await import("../images/favicon_light_48x48.png");

function makeFaviconLink(url: string, size: string) {
	let icon = document.createElement("link");
	icon.setAttribute("rel", "icon");
	icon.setAttribute("sizes", size);
	icon.setAttribute("href", url);
	document.head.appendChild(icon);
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
			makeFaviconLink(darkThemeIcon16.default, "16x16");
			makeFaviconLink(darkThemeIcon32.default, "32x32");
			makeFaviconLink(darkThemeIcon48.default, "48x48");
		} else {
			makeFaviconLink(lightThemeIcon16.default, "16x16");
			makeFaviconLink(lightThemeIcon32.default, "32x32");
			makeFaviconLink(lightThemeIcon48.default, "48x48");
		}
	};

	matcher.addEventListener("change", onUpdate);
	onUpdate();
}
