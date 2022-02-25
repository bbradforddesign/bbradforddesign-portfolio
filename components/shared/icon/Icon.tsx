import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

type Props = {
    icon: string;
};

export const Icon: React.FC<Props> = ({ icon }) => {
    switch (icon) {
        case "GitHub":
            return <SiGithub />;
        case "LinkedIn":
            return <SiLinkedin />;
        case "Email":
            return <SiGmail />;
        default:
            return <p className="italic">Unknown Icon</p>;
    }
};
