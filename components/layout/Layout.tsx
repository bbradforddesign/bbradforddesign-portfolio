import { ThemeProvider } from "next-themes";

import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { ThemeToggle } from "./themeToggle/ThemeToggle";

type Props = {
    children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            <div className="min-h-screen flex flex-col space-between">
                <header className="sticky z-40 top-0 -mb-12">
                    <Navbar />
                </header>
                <main className="animate-fade-in bg-slate-50 dark:bg-slate-900 py-12 px-8">
                    {children}
                </main>
                <ThemeToggle />
                <Footer />
            </div>
        </ThemeProvider>
    );
};
