import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./themeToggle/ThemeToggle";

type Props = {
    children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            <header className="sticky z-40 absolute top-0 -mb-12">
                <Navbar />
            </header>
            <main className="bg-slate-50 dark:bg-slate-900 py-12 px-8">
                {children}
            </main>
            <ThemeToggle />
            <Footer />
        </ThemeProvider>
    );
};
