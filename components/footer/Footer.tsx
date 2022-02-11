import { useTheme } from "next-themes";

import { Social } from "../../shared/constants";
import { Icon } from "../icon/Icon";

type Props = {
    links: SocialLink[];
};

type SocialLink = {
    icon: Social;
    url: string;
};

export const Footer: React.FC<Props> = ({ links }) => {
    const { theme, setTheme } = useTheme();

    const renderSocialLinks = links.map((e) => (
        <li key={e.icon} className="w-min">
            <a href={e.url}>
                <Icon icon={e.icon} />
            </a>
        </li>
    ));

    return (
        <footer className="w-full p-4 opacity-95 backdrop-blur-lg bg-white dark:bg-slate-900 sticky bottom-0 flex justify-between">
            <ul className="flex gap-4">{renderSocialLinks}</ul>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                name="Dark mode toggle"
                aria-label="Dark mode toggle"
            >
                <Icon icon="lightbulb" />
            </button>
        </footer>
    );
};
