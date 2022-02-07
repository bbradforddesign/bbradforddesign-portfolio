module.exports = {
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    darkMode: "class",
    purge: {
        enabled: true,
        content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
        options: {
            safelist: ["dark"],
        },
    },
    theme: {
        extend: {
            keyframes: {
                "menu-active": {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "scale(0.5)",
                        opacity: "0",
                    },
                },
                "menu-inactive": {
                    "0%": {
                        transform: "rotate(90deg)",
                    },
                    "50%": {
                        transform: "scale(0.5)",
                        opacity: "0",
                    },
                },
            },
            animation: {
                "menu-active": "menu-active 0.25s ease-out",
                "menu-inactive": "menu-inactive 0.25s ease",
            },
        },
    },
    plugins: [],
};
