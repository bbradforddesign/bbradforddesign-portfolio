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
    const renderSocialLinks = links.map((e) => (
        <li key={e.icon} className="w-min">
            <a href={e.url}>
                <Icon icon={e.icon} />
            </a>
        </li>
    ));

    return (
        <footer className="w-full p-4 bg-white sticky bottom-0 flex justify-center gap-24 md:justify-end">
            <ul className="flex gap-4">{renderSocialLinks}</ul>
            <button>Light/Dark</button>
        </footer>
    );
};
