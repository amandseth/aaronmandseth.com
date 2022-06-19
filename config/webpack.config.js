const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const config = require("./site.config");
const loaders = require("./webpack.loaders");
const plugins = require("./webpack.plugins");

module.exports = {
	context: path.join(config.ROOT, config.PATHS.SRC),
	entry: [
		path.join(config.ROOT, config.PATHS.SRC, "scripts/index.js"),
		path.join(config.ROOT, config.PATHS.SRC, "styles/style.scss"),
	],
	output: {
		path: path.join(config.ROOT, config.PATHS.DIST),
		filename: "assets/[name].[hash].js",
		publicPath: "/",
	},
	mode: process.env.NODE_ENV,
	devServer: {
		hot: true,
		open: true,
		port: config.PORT,
	},
	module: {
		rules: loaders,
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
	plugins
};