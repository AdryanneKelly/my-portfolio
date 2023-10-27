/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				redPrimaryColor: '#e70303',
				redSecondaryColor: '#c90404',
				redLightColor: '#ff0000',
				hoverRedPrimaryColor: '#a50606',
				hoverRedSecondaryColor: '#870202',
				dark: '#252A34',
				light: '#EAEAEA',
			},
			cursor: {
				'fancy': 'url(./src/images/bat.svg), pointer'
			}
		},
		fontFamily: {
			'sans': ['Grenze Gotisch', 'ui-sans-serif', 'system-ui']
		},
		
	},
	plugins: [],
}
