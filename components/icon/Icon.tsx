import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

type Props = {
    icon: string;
};

export const Icon: React.FC<Props> = ({ icon }) => {
    switch (icon) {
        case "github":
            return <SiGithub style={{ fontSize: "1.5rem" }} />;
        case "linkedin":
            return <SiLinkedin style={{ fontSize: "1.5rem" }} />;
        case "email":
            return <SiGmail style={{ fontSize: "1.5rem" }} />;
        default:
            return <p className="italic">Unknown Icon</p>;
    }
};
