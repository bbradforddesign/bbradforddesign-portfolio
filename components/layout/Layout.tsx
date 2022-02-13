import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { ThemeProvider } from "next-themes";

type Props = {
    children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            <header className="sticky z-10 absolute top-0 -mb-12">
                <Navbar />
            </header>
            <main className="dark:bg-slate-900">{children}</main>
            <Footer />
        </ThemeProvider>
    );
};
