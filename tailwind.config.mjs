/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                "black-2": "#0A0A0A",
                "black-3": "#111010",
                white: "#FFFFFF",
                "white-2": "#F5F3EF",
                gray: "#4B4B4A",
                primary: "#F9DBB5",
                secondary: "#FFF5E7",
                tertiary: "#A16A41",
                fourth: "#5C150E",
                fifth: "#BD9045",
                header: "rgba(10, 10, 10, 0.9)",
            },
        },
        keyframes: {
            reveal: {
                from: {opacity: 0},
                to: {opacity: 1}
            }
        },
        screens: {
            rdesk: { min: "1920px" },
            xl: { max: "1280px" },
            rxl: { min: "1280px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1024px" },
            rlg: { min: "1024px" },
            // => @media (max-width: 1023px) { ... }
            lgmd: { max: "900px" },
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "640px" },
            // => @media (max-width: 639px) { ... }
            xsm: { max: "500px" },
        },
    },
    plugins: [],
};
