import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";

type Props = {
    icon: string;
};

export const Icon: React.FC<Props> = ({ icon }) => {
    switch (icon) {
        case "github":
            return <SiGithub className="text-2xl" />;
        case "linkedin":
            return <SiLinkedin className="text-2xl" />;
        case "email":
            return <SiGmail className="text-2xl" />;
        case "lightbulb":
            return <FaLightbulb className="text-3xl dark:text-yellow-300" />;
        default:
            return <p className="italic">Unknown Icon</p>;
    }
};
