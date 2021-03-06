import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

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
                <a className="animated-link font-semibold text-lg">{e}</a>
            </Link>
        </li>
    ));

    return (
        <nav className="flex flex-col justify-between items-start py-4 px-8 w-full bg-slate-50 dark:bg-slate-900 shadow-md lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <Link href="/#">
                    <a className="relative w-10 h-10">
                        <Image src={logo} alt="personal logo" layout="fill" />
                    </a>
                </Link>
                <button
                    className="lg:hidden relative h-6 w-8 hover:opacity-50"
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
                } flex-col w-full absolute top-14 left-0 pb-4 lg:pb-0 shadow-md lg:shadow-none bg-slate-50 dark:bg-slate-900 lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:w-auto`}
            >
                {renderHomepageLinks}
                <li className="ml-12 my-2 w-fit lg:my-0 lg:ml-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Full Resume"
                    >
                        <button className="outline-button">Resume</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
