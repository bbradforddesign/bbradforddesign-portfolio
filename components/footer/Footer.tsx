import { useTheme } from "next-themes";
import { ISocialLink } from "../../@types/generated/contentful";

import { Icon } from "../icon/Icon";

type Props = {
    links?: ISocialLink[];
};

export const Footer: React.FC<Props> = ({ links }) => {
    const { theme, setTheme } = useTheme();

    const renderSocialLinks =
        links &&
        links.map((e) => {
            const { title, url } = e.fields;

            return (
                <li key={title} className="w-min">
                    <a href={url} target="_blank" rel="noreferrer">
                        <Icon icon={title} />
                    </a>
                </li>
            );
        });

    return (
        <footer className="w-full p-4 opacity-95 backdrop-blur-lg bg-white dark:bg-slate-900 sticky bottom-0 flex justify-between">
            <ul className="flex gap-4">{renderSocialLinks}</ul>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                name="Dark mode toggle"
                aria-label="Dark mode toggle"
            >
                <Icon icon="Lightbulb" />
            </button>
        </footer>
    );
};
