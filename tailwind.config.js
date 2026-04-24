/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "2rem",
				sm: "3rem",
				lg: "4vw",
				xl: "6vw",
				"2xl": "8vw",
			}
		},
		extend: {
			colors: {
				brand: {
					foreground: "#f5f5f5",
					"foreground-darker": "#9c9b9b",
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
