const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoader = {
	loader: "css-loader",
	options: {},
};

const sassLoader = {
	loader: "sass-loader",
	options: {},
};

const postcssLoader = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: ["autoprefixer"],
		},
	},
};

const cssLinkLoader = {
	loader: MiniCssExtractPlugin.loader,
	options: {
		publicPath: "",
	},
};

const htmlLoader = {
	loader: "html-loader",
	options: {},
};

const ejsLoader = {
	loader: "template-ejs-loader",
	options: {},
};

const styleRule = {
	test: /\.s[ac]ss$/i,
	use: [cssLinkLoader, cssLoader, postcssLoader, sassLoader]
}

const partialsRule = {
	test: /\.ejs$/i,
	use: [htmlLoader, ejsLoader],
};

const imagesRule = {
	test: /images\/.+\.(png|jpe?g|gif|svg)$/i,
	type: "asset/resource",
	generator: {
		filename: "assets/[name].[hash][ext][query]",
	},
};

const fontsRule = {
	test: /bootstrap-icons\/font\/fonts\/.+\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
	generator: {
		filename: "[name].[contenthash][ext][query]",
		outputPath: "assets/",
	},
};

module.exports = [styleRule, partialsRule, imagesRule, fontsRule];