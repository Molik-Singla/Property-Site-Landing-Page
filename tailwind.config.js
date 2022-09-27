module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "1.5xl": "1.375rem",
            "2xl": "1.5rem",
            "2.5xl": "1.625rem",
            "3xl": "1.875rem",
            "3.5xl": "2rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            "sm-min": { min: "480px" },
            // => @media (min-width: 480px) { ... }
        },
        extend: {
            boxShadow: {
                "primary-shadow": "0px 4px 4px 0px rgba(134, 104, 253, .5)",
                "secondary-shadow": "0 4px 4px 0px rgba(0, 0, 0, .25)",
                "card-button-shadow": "1px 3px 2px 1px #00000099",
                "card-shadow": "4px 7px 5px -1px #00000069",
            },
            dropShadow: {
                "primary-shadow": "0px 4px 4px 0px rgba(134, 104, 253, .2)",
                "secondary-shadow": "0 4px 4px 0px rgba(0, 0, 0, .25)",
            },
            fontFamily: {
                "font-montserrat": ["Montserrat", "sans-serif"],
                "font-roboto": ["Roboto", "sans-serif"],
            },
            colors: {
                "light-button-color": "#7F56D9",
                "dark-button-color": "#352089",

                "text-color": "#341F87",

                "light-card-color": "#9277FB",
                "dark-card-color": "#4B2FB7",
            },
        },
    },
    plugins: [],
};
