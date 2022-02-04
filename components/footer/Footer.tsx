import { useTheme } from "../../context/ThemeContext";

import { Social } from "../../shared/constants";
import { Icon } from "../icon/Icon";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

type Props = {
    links: SocialLink[];
};

type SocialLink = {
    icon: Social;
    url: string;
};

export const Footer: React.FC<Props> = ({ links }) => {
    const { darkMode, toggleDarkMode } = useTheme();

    const renderSocialLinks = links.map((e) => (
        <li key={e.icon} className="w-min">
            <a href={e.url}>
                <Icon icon={e.icon} />
            </a>
        </li>
    ));

    return (
        <footer className="w-full py-4 px-8 bg-white sticky bottom-0 flex justify-between">
            <ul className="flex gap-4">{renderSocialLinks}</ul>
            <button onClick={toggleDarkMode}>
                {darkMode ? (
                    <BsSunFill style={{ fontSize: "1.5rem" }} />
                ) : (
                    <BsMoonFill style={{ fontSize: "1.5rem" }} />
                )}
            </button>
        </footer>
    );
};
