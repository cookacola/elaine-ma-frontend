"./src/**/*.{html,js}";
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{jsx,html,js,css}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
	darkMode: "class",
	variants: {
		extend: {
			textColor: ["hover"],
		},
	},
};
