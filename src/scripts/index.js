const { createModal }  = require("./modal");

document.addEventListener("DOMContentLoaded", function() {
	const modal = createModal(document.getElementById("contactModal"));
	const openElements = document.querySelectorAll("[data-action='open-modal']");
	const closeElements = document.querySelectorAll("[data-action='close-modal']");

	for (var i = 0; i < openElements.length; i++) {
		openElements[i].addEventListener("click", function() {
			modal.open();
		});
	}

	for (var i = 0; i < closeElements.length; i++) {
		closeElements[i].addEventListener("click", function() {
			modal.close();
		});
	}

	document.getElementById("copyEmail").addEventListener("click", function() {
		var who = this.getAttribute("data-who");
		var domain = this.getAttribute("data-domain");
		var tld = this.getAttribute("data-tld");
		if (navigator.clipboard) {
			navigator.clipboard.writeText(who + "@" + domain + "." + tld).catch(function(err) {
				console.error("Could not copy text to clipboard:", err);
			});
		}
	});
});