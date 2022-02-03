import { ScrollLink } from "../../pages";

type Props = {
    link: ScrollLink;
};

export const NavLink: React.FC<Props> = ({ link }) => {
    return (
        <li className="m-2 lg:my-0">
            <a
                href={`#/${link.display}`}
                aria-label={`Scroll to ${link.display}`}
                className="font-semibold hover:text-sky-500"
                onClick={() =>
                    link?.ref?.current?.scrollIntoView({ behavior: "smooth" })
                }
            >
                {link.display}
            </a>
        </li>
    );
};
