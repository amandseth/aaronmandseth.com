const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const clean = new CleanWebpackPlugin();

const html = new HtmlWebpackPlugin({
	filename: "index.html",
	template: "index.ejs",
	inject: true,
});

const progress = new ProgressBarWebpackPlugin();

const cssFiles = new MiniCssExtractPlugin({
	filename: "assets/style.[contenthash].css",
});

module.exports = [
	clean,
	html,
	progress,
	cssFiles,
];