/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#002856',
				secondary: '#ffffff'
			},
			fontFamily: {
				primary: 'var(--font-geologica)',
				secondary: 'var(--font-rosarivo)'
			},
			fontSize: {
				a: ['13px'],
				p: ['14px'],
				h6: ['16px'],
				h5: ['21.33px'],
				h4: ['28.43px'],
				h3: ['37.90px'],
				h2: ['50.52px'],
				h1: ['67.34px']
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				fadeOpacity: {
					'0%': { opacity: '0' },
					'100%': { opacity: '0.60' }
				}
				// Add other keyframes as needed
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out forwards',
				fadeOpacity: 'fadeOpacity 1s ease-in-out forwards'
				// Add other animations as needed
			},
			fontFamily: {
				primary: ['Absolut', 'sans-serif'], // Add other fallback fonts as needed
				secondary: ['Atkinson', 'sans-serif']
			},
			screens: {
				sm2: '500px'
			}
		}
	},
	plugins: []
};
