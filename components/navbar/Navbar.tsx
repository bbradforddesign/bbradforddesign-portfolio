import { useState, useLayoutEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { useWindowSize } from "../../shared/hooks";

type Props = {
    links: Link[];
};

type Link = {
    display: string;
    url: string;
};

export const Navbar: React.FC<Props> = ({ links }) => {
    const [viewNavLinks, setViewNavLinks] = useState<boolean>(false);
    const [viewAnimation, setViewAnimation] = useState<boolean>(false);
    const [width, height] = useWindowSize();

    useLayoutEffect(() => {
        setViewAnimation(false);
    }, [width]);

    const renderNavLinks = links.map((e) => (
        <li key={e.display} className="m-2 lg:my-0">
            <a href={e.url} className="font-semibold hover:text-sky-500">
                {e.display}
            </a>
        </li>
    ));

    const handleMenuButton = () => {
        setViewNavLinks((viewNavLinks) => !viewNavLinks);
        setViewAnimation(true);
    };

    return (
        <nav className="flex flex-col justify-between items-start p-4 w-full sticky top-0 z-10 bg-white border-b-2 lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="font-bold text-xl">bbradforddesign</h1>
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
                <ul className="flex flex-col w-full absolute top-14 left-0 bg-white border-b-2 lg:relative lg:top-0 lg:border-none lg:flex-row lg:w-auto">
                    {renderNavLinks}
                </ul>
            )}
        </nav>
    );
};
