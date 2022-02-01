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
                <Icon name={e.icon} size="sm" color="black" />
            </a>
        </li>
    ));

    return (
        <footer className="w-full p-4 bg-white flex justify-between gap-8">
            <ul className="flex gap-4">{renderSocialLinks}</ul>
            <p className="italic text-sm self-center">2022 Blake Bradford</p>
        </footer>
    );
};
