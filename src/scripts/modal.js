function createModal(modalEl) {
	var modal = {
		el: modalEl,
	};

	const openElements = document.querySelectorAll(
		"[data-action='open-modal']"
	);
	const closeElements = document.querySelectorAll(
		"[data-action='close-modal']"
	);

	for (var i = 0; i < openElements.length; i++) {
		openElements[i].addEventListener("click", function (e) {
			if (this === e.target) {
				modal.open();
			}
		});
	}

	for (var i = 0; i < closeElements.length; i++) {
		closeElements[i].addEventListener("click", function (e) {
			if (this === e.target) {
				modal.close();
			}
		});
	}

	modal.open = function () {
		modal.el.style.display = "block";
	};

	modal.close = function () {
		modal.el.style.display = "none";
	};

	return modal;
}

module.exports = { createModal };
