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

var modal = createModal(document.getElementById("contactModal"));

document.getElementById("copyEmail").addEventListener("click", function() {
	copyEmail(this);
});

document.getElementById("contactLink").addEventListener("click", function() {
	modal.open();
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
	modal.close();
});