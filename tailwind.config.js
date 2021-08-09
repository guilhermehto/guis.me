module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	mode: 'jit',
	theme: {
		colors: {
			primary: '#9A8C98',
			secondary: '#4A4E69',
			ternary: '#22223B',
			white: '#ffffff',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
