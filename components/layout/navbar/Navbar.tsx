import { useState } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    // using an array to generate list of links for ease of styling
    const homepageLinks: string[] = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    // render links to homepage sections; not separate pages
    const renderHomepageLinks = homepageLinks.map((e) => (
        <li className="ml-12 my-2 w-fit lg:my-0 lg:ml-4" key={e}>
            <Link shallow={true} href={`/#${e}`}>
                <a className="nav-link font-semibold text-lg">{e}</a>
            </Link>
        </li>
    ));

    return (
        <nav className="flex flex-col justify-between items-start p-4 w-full bg-slate-50 dark:bg-slate-900 shadow-md lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <Link href="/#">
                    <a>
                        <h1 className="font-bold text-xl">bbradforddesign</h1>
                    </a>
                </Link>
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
                } flex-col w-full absolute top-14 left-0 pb-4 lg:pb-0 shadow-md lg:shadow-none bg-slate-50 dark:bg-slate-900 lg:relative lg:top-0 lg:flex lg:flex-row lg:w-auto`}
            >
                {renderHomepageLinks}
            </ul>
        </nav>
    );
};
