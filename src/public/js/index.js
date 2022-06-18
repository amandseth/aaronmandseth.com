function copyClipboard(str) {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(str).catch(function(err) {
			console.error("Could not copy text to clipboard:", err);
		});
	}
}

function copyEmail(el) {
	var who = el.getAttribute("data-who");
	var domain = el.getAttribute("data-domain");
	var tld = el.getAttribute("data-tld");
	copyClipboard(who + "@" + domain + "." + tld);
}

(function() {
	var modal = createModal(document.getElementById("contactModal"));
	var openElements = document.querySelectorAll("[data-action='open-modal']");
	var closeElements = document.querySelectorAll("[data-action='close-modal']");
	
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
		copyEmail(this);
	});
})();