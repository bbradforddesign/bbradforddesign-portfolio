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
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};
