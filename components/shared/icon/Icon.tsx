import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";

type Props = {
    icon: string;
};

export const Icon: React.FC<Props> = ({ icon }) => {
    switch (icon) {
        case "GitHub":
            return <SiGithub className="text-2xl" />;
        case "LinkedIn":
            return <SiLinkedin className="text-2xl" />;
        case "Email":
            return <SiGmail className="text-2xl" />;
        default:
            return <p className="italic">Unknown Icon</p>;
    }
};
