import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { Navbar } from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    // each link name keyword is tied to a specific component; constant is pre-defined for simplicity
    // links point to sections on homepage, not separate pages
    const homepageLinks: string[] = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    return (
        <ThemeProvider attribute="class">
            <Navbar homepageLinks={homepageLinks} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
