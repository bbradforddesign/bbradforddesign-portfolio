import { useState } from "react";
import Link from "next/link";

type Props = {
    homepageLinks: string[];
};

export const Navbar: React.FC<Props> = ({ homepageLinks }) => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    // render links to homepage sections; not generated pages
    const renderHomepageLinks = homepageLinks.map((e) => (
        <li className="ml-12 my-2 w-fit lg:my-0 lg:ml-4" key={e}>
            <Link href={`#${e}`}>
                <a className="nav-link">{e}</a>
            </Link>
        </li>
    ));

    return (
        <nav className="flex flex-col justify-between items-start p-4 w-full sticky top-0 -mb-12 z-10 opacity-95 backdrop-blur-lg bg-white dark:bg-slate-900 border-b-2 lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <Link href="#">
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
                } flex-col w-full absolute top-14 left-0 pb-4 lg:pb-0 bg-white dark:bg-slate-900 border-b-2 lg:relative lg:top-0 lg:border-none lg:flex lg:flex-row lg:w-auto`}
            >
                {renderHomepageLinks}
            </ul>
        </nav>
    );
};
