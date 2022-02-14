import { useState } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    // each link name keyword is tied to a specific component; constant is pre-defined for simplicity
    // links point to sections on homepage, not separate pages
    const homepageLinks: string[] = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    // render links to homepage sections; not generated pages
    const renderHomepageLinks = homepageLinks.map((e) => (
        <li className="nav-link ml-12 my-2 w-fit lg:my-0 lg:ml-4" key={e}>
            <Link
                shallow={true}
                scroll={false}
                href={{ pathname: "/", hash: e }}
            >
                {e}
            </Link>
        </li>
    ));

    return (
        <nav className="flex flex-col justify-between items-start p-4 w-full opacity-95 backdrop-blur-lg bg-white dark:bg-slate-900 border-b-2 lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="font-bold text-xl">
                    <Link href={{ pathname: "/", hash: "" }}>
                        bbradforddesign
                    </Link>
                </h1>
                <button
                    className="lg:hidden relative h-6 w-8"
                    aria-label="navigation toggle"
                    onClick={() => setOpenNav((openNav) => !openNav)}
                >
                    <span
                        className={`menu-button ${
                            openNav ? "menu-active" : "menu-inactive"
                        }`}
                    />
                </button>
            </div>
            <ul
                className={`${
                    openNav ? "flex" : "hidden"
                } flex-col w-full absolute top-14 left-0 pb-4 lg:pb-0 bg-white dark:bg-slate-900 border-b-2 lg:relative lg:top-0 lg:border-none lg:flex lg:flex-row lg:w-auto`}
            >
                {renderHomepageLinks}
            </ul>
        </nav>
    );
};
