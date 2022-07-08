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
	options: {},
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
		filename: "assets/[name].[contenthash][ext][query]",
	},
};

const iconsRule = {
	test: /bootstrap-icons\/icons\/.+\.svg$/i,
	type: "asset/resource",
	generator: {
		filename: "assets/[name].[contenthash][ext][query]",
	},
};

const faviconRule = {
	test: /favicon\.ico$/i,
	type: "asset/resource",
	generator: {
		filename: "assets/favicon.ico",
	},
};

const fontsRule = {
	test: /bootstrap-icons\/font\/fonts\/.+\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
	generator: {
		filename: "assets/[name].[contenthash][ext][query]",
	},
};

module.exports = [styleRule, partialsRule, imagesRule, fontsRule, iconsRule, faviconRule];