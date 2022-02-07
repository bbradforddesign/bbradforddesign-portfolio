import { useState, useLayoutEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

import { useWindowSize } from "../../shared/hooks";

type Props = {
    samePageLinks: string[];
};

export const Navbar: React.FC<Props> = ({ samePageLinks }) => {
    const [viewNavLinks, setViewNavLinks] = useState<boolean>(false);
    const [viewAnimation, setViewAnimation] = useState<boolean>(false);
    const [width, height] = useWindowSize();

    useLayoutEffect(() => {
        setViewAnimation(false);
    }, [width]);

    // render links to same-page components; not generated pages
    // uses Link to take advantage of Next's routing
    const renderSamePageLinks = samePageLinks.map((e) => (
        <li className="m-2 lg:my-0" key={e}>
            <Link href={`#${e}`}>
                <a className="font-semibold hover:text-sky-500">{e}</a>
            </Link>
        </li>
    ));

    const handleMenuButton = () => {
        setViewNavLinks((viewNavLinks) => !viewNavLinks);
        setViewAnimation(true);
    };

    return (
        <nav className="flex flex-col justify-between items-start p-4 w-full sticky top-0 -mb-12 z-10 bg-white dark:bg-slate-900 border-b-2 lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <Link href="#">
                    <a>
                        <h1 className="font-bold text-xl">bbradforddesign</h1>
                    </a>
                </Link>
                <GiHamburgerMenu
                    className={`text-xl mr-2 ${
                        viewNavLinks
                            ? `rotate-90 ${
                                  viewAnimation && "animate-menu-active"
                              }`
                            : `${viewAnimation && "animate-menu-inactive"}`
                    } lg:hidden`}
                    onClick={handleMenuButton}
                />
            </div>
            {(width >= 1024 || viewNavLinks) && (
                <ul className="flex flex-col w-full absolute top-14 left-0 bg-white dark:bg-slate-900 border-b-2 lg:relative lg:top-0 lg:border-none lg:flex-row lg:w-auto">
                    {renderSamePageLinks}
                </ul>
            )}
        </nav>
    );
};
