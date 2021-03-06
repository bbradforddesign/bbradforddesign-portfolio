import { Icon } from "../../shared/icon/Icon";

export const Footer: React.FC = () => {
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
                        className="text-2xl hover:opacity-50"
                    >
                        <Icon icon={title} />
                    </a>
                </li>
            );
        });

    return (
        <footer className="w-full py-4 px-8 bg-slate-50 dark:bg-slate-900 flex justify-between">
            <ul className="flex gap-4">{renderSocialLinks}</ul>
        </footer>
    );
};
