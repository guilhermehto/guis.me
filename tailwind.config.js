module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {
			fontSize: {
				'20xl': '24rem',
				'15xl': '15rem',
			},
		},

		colors: {
			primary: '#C9ADA7',
			secondary: '#4A4E69',
			ternary: '#22223B',
			white: '#ffffff',
		},

		fontFamily: {
			display: ['Staatliches'],
			body: ['"Open Sans"'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
