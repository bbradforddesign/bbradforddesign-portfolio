module.exports = {
    stories: ["../components/**/*.stories.tsx"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/react",
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.css&/,
            use: ["style-loader", "css-loader", "postcss-loader"],
        });
        return config;
    },
};
