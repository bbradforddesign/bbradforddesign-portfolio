type Props = {
    links: Link[];
};

type Link = {
    display: string;
    url: string;
};

export const Navbar: React.FC<Props> = ({ links }) => {
    const renderNavLinks = links.map((e) => (
        <li>
            <a href={e.url}>{e.display}</a>
        </li>
    ));

    return (
        <nav>
            <h1>bbradforddesign</h1>
            <ul>{renderNavLinks}</ul>
            <style jsx>{`
                * {
                    font-family: "Roboto", sans-serif;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                }

                h1,
                ul {
                    margin: 0;
                }

                ul {
                    display: flex;
                    list-style-type: none;
                }

                li {
                    margin-left: 1rem;
                }

                a {
                    text-decoration: none;
                    font-weight: bolder;
                    font-size: 1.125rem;
                    color: black;
                }
            `}</style>
        </nav>
    );
};
