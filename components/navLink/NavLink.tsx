import React, { useState, useEffect } from "react";

type Props = {
    linkName: string;
};

export const NavLink: React.FC<Props> = ({ linkName }) => {
    const [scrollTarget, setScrollTarget] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setScrollTarget(document.getElementById(linkName));
    }, [linkName]);

    const handleClick: React.MouseEventHandler = (e) => {
        e.preventDefault();
        if (!scrollTarget) {
            return;
        }
        scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <li className="m-2 lg:my-0">
            <a
                href={`#${linkName}`}
                aria-label={`Scroll to ${linkName}`}
                className="font-semibold hover:text-sky-500"
                onClick={handleClick}
            >
                {linkName}
            </a>
        </li>
    );
};
