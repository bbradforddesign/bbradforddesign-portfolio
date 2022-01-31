import { useState } from "react";
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
    const [width, height] = useWindowSize();

    const renderNavLinks = links.map((e) => (
        <li key={e.display} className="m-2 lg:my-0">
            <a href={e.url} className="font-semibold hover:text-sky-500">
                {e.display}
            </a>
        </li>
    ));

    return (
        <nav className="flex flex-col justify-between items-start p-4 w-full shadow-md rounded-md lg:flex-row lg:items-center">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="font-bold text-xl">bbradforddesign</h1>
                <GiHamburgerMenu
                    className={`text-xl mr-2 ${
                        viewNavLinks && "rotate-90"
                    } lg:hidden`}
                    onClick={() =>
                        setViewNavLinks((viewNavLinks) => !viewNavLinks)
                    }
                />
            </div>
            {(width >= 1024 || viewNavLinks) && (
                <ul className="flex flex-col w-full lg:flex-row lg:w-auto">
                    {renderNavLinks}
                </ul>
            )}
        </nav>
    );
};
