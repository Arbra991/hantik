/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'graycanvas': {
					500: '#646A79',
					700: '#282833',
					800: '#191920',
					900: '#15151B',
				},
				'bluehantik': {
					500: '#1BA0C9',
					800: '#003359',
					900: '#0A1B37',
					950: '#091830',
				}
			},
			fontFamily: {
				'raleway': ['Raleway Variable', 'sans-serif'],
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
				'infinite-scroll-reverse': 'infinite-scroll-reverse 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'infinite-scroll-reverse': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' },
				},
			}
		},
	},
	plugins: [],
}
