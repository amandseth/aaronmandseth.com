import express from "express";
import path from "path";

export function runServer() {
	const app = express();
	app.set("views", path.join(__dirname, "src"));
	app.set("view engine", "ejs");

	app.get("/", function(req, res) {
		res.render("index");
	});

	app.use(express.static(path.join(__dirname, "src/public")));

	const server = app.listen(9050);
	console.log("Listening on http://127.0.0.1:9050");
	return server;
}

if (require.main === module) {
	runServer();
}