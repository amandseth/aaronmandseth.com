/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				brand: {
					foreground: "#f5f5f5",
					"foreground-secondary": "#d8d8d8",
					background: "#16181c",
					"background-secondary": "#171e30",
					highlight: "#4885eb",
				},
			},
		},
	},
	plugins: [],
};
