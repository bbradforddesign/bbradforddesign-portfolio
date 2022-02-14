import { useTheme } from "next-themes";
import { Icon } from "../icon/Icon";

export const Footer: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const links = [
        { title: "GitHub", url: "https://github.com/bbradforddesign" },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/blake-bradford/",
        },
        { title: "Email", url: "mailto:bbradforddesign@gmail.com" },
    ];

    const renderSocialLinks =
        links &&
        links.map((e) => {
            const { title, url } = e;

            return (
                <li key={title} className="w-min">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={title}
                    >
                        <Icon icon={title} />
                    </a>
                </li>
            );
        });

    return (
        <footer className="w-full p-4 bg-white dark:bg-slate-900 sticky bottom-0 flex justify-between">
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
