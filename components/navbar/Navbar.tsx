import { useState, useLayoutEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
    links: Link[];
};

type Link = {
    display: string;
    url: string;
};

const useWindowSize = () => {
    const [size, setSize] = useState<number[]>([0, 0]);
    useLayoutEffect(() => {
        const updateSize: VoidFunction = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};

export const Navbar: React.FC<Props> = ({ links }) => {
    const [viewNavLinks, setViewNavLinks] = useState<boolean>(false);
    const [width, height] = useWindowSize();

    const renderNavLinks = links.map((e) => (
        <li>
            <a href={e.url}>{e.display}</a>
        </li>
    ));

    return (
        <nav>
            <div className="nav-top">
                <h1>bbradforddesign</h1>
                <GiHamburgerMenu
                    id="nav-hamburger"
                    onClick={() =>
                        setViewNavLinks((viewNavLinks) => !viewNavLinks)
                    }
                />
            </div>
            {(width >= 1440 || viewNavLinks) && <ul>{renderNavLinks}</ul>}
            <style jsx>{`
                * {
                    font-family: "Roboto", sans-serif;
                }

                nav {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 1rem;
                    width: 100%;
                }

                h1 {
                    margin: 0;
                }

                .nav-top {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                #nav-hamburger {
                    font-size: 1.5rem;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    list-style-type: none;
                    margin: 1.5rem 0;
                    padding: 0;
                    width: 100%;
                    box-shadow: 0.5rem 0.5rem 0.25rem rgba(196, 196, 196, 0.5);
                }

                li {
                    margin: 1rem;
                }

                a {
                    text-decoration: none;
                    font-weight: medium;
                    font-size: 1.125rem;
                    color: black;
                }

                @media (min-width: 1440px) {
                    nav {
                        flex-direction: row;
                        align-items: center;
                    }

                    .nav-top {
                        width: auto;
                    }

                    #nav-hamburger {
                        display: none;
                    }

                    ul {
                        margin: 0;
                        flex-direction: row;
                        width: auto;
                        box-shadow: none;
                    }

                    li {
                        margin: 0 0 0 1rem;
                    }
                }
            `}</style>
        </nav>
    );
};
