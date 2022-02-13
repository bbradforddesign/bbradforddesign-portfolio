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
    plugins: [],
};
