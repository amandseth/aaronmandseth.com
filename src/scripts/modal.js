function createModal(modalEl) {
	var modal = {
		__listener: null,
		el: modalEl,
	};

	modal.open = function() {
		modal.el.style.display = "block";
		modal.__listener = function(e) {
			if (this === e.target) {
				modal.close();
			}
		};
		modal.el.addEventListener("click", modal.__listener);
	}

	modal.close = function() {
		modal.el.style.display = "none";

		if (modal.__listener) {
			modal.el.removeEventListener("click", modal.__listener);
			modal.__listener = null;
		}
	}

	return modal;
}

module.exports = { createModal }