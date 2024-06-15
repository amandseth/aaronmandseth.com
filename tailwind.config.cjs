/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "2rem",
				sm: "3rem",
				lg: "4rem",
				xl: "6rem",
				"2xl": "8rem",
			},
		},
		extend: {
			colors: {
				brand: {
					foreground: "#f5f5f5",
					background: "#16181c",
					"background-darker": "#0c0d0f",
					highlight: "#4885eb",
					"highlight-darker": "#235ec1",
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
};
