import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

type Props = {
    homepageLinks: string[];
};

export const Navbar: React.FC<Props> = ({ homepageLinks }) => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    // render links to homepage sections; not generated pages
    const renderHomepageLinks = homepageLinks.map((e) => (
        <li className="m-2 lg:my-0" key={e}>
            <Link href={`#${e}`}>
                <a className="font-semibold hover:text-blue-600 dark:hover:text-yellow-300">
                    {e}
                </a>
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
                <GiHamburgerMenu
                    className={`text-xl mr-2 ${
                        openNav
                            ? "rotate-90 animate-menu-active"
                            : "animate-menu-inactive"
                    } lg:hidden`}
                    onClick={() => setOpenNav((openNav) => !openNav)}
                />
            </div>
            <ul
                className={`${openNav || "hidden"} ${
                    !openNav || "flex"
                } flex-col w-full absolute top-14 left-0 bg-white dark:bg-slate-900 border-b-2 lg:relative lg:top-0 lg:border-none lg:flex lg:flex-row lg:w-auto`}
            >
                {renderHomepageLinks}
            </ul>
        </nav>
    );
};
