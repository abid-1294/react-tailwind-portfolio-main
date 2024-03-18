module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", 'sans-serif'],
			},
			maxWidth: {
				'container': '1320px',
			},
			backgroundImage: {
				'hero-img': "url('./src/images/bg-image.png')",
			}

		},
	},
	plugins: [],
};
