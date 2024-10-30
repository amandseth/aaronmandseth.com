export function initLazyImages() {
	const handler = function () {
		var makeVisible = function (el: HTMLElement) {
			el.style.opacity = "1";
		};

		var lazyImages =
			document.querySelectorAll<HTMLImageElement>("img.lazy");

		lazyImages.forEach(function (img) {
			if (img.complete) {
				makeVisible(img);
			} else {
				img.addEventListener("load", function () {
					makeVisible(img);
				});
			}
		});
	};

	document.addEventListener("DOMContentLoaded", handler);
	document.addEventListener("astro:page-load", handler);
}
