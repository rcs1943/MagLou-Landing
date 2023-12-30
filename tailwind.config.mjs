/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"black": '#000000',
				"black-2": '#0A0A0A',
				"white": '#FFFFFF',
				"primary": '#F9DBB5',
				"secondary": '#FFF5E7',
				"tertiary": '#A16A41',
				"fourth": '#5C150E',
				"header": 'rgba(10, 10, 10, 0.9)'
			}
		},
		screens: {
			xl: { max: "1280px" },
			rxl: { min: "1280px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			rlg: { min: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "640px" },
			// => @media (max-width: 639px) { ... }
			xsm: {max: "500px"}
		},
	},
	plugins: [],
}
