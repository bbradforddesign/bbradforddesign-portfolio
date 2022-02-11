/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.ctfassets.net"],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

module.exports = nextConfig;
