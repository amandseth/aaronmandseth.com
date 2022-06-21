const { createModal }  = require("./modal");
const dynamicTheme = require("./dynamic-theme");

document.addEventListener("DOMContentLoaded", function() {
	dynamicTheme();
	const modal = createModal(document.getElementById("contactModal"));

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