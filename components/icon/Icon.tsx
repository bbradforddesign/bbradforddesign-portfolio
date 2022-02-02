import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiVuedotjs,
    SiGo,
    SiLinkedin,
    SiGithub,
    SiGmail,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiNextdotjs,
    SiDgraph,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiContentful,
    SiFigma,
    SiAdobecreativecloud,
    SiJira,
    SiSlack,
    SiGit,
    SiWordpress,
} from "react-icons/si";

import { Social, Technology } from "../../shared/constants";

type Props = {
    name: Technology | Social;
    size: string;
    color?: string;
};

interface ElementMap {
    [key: string]: React.ReactElement;
}

export const Icon: React.FC<Props> = ({ name, size, color }) => {
    const IconMap: ElementMap = {
        html: <SiHtml5 style={{ color: color || "orange", fontSize: size }} />,
        css: <SiCss3 style={{ color: color || "blue", fontSize: size }} />,
        javascript: (
            <SiJavascript style={{ color: color || "red", fontSize: size }} />
        ),
        typescript: (
            <SiTypescript style={{ color: color || "blue", fontSize: size }} />
        ),
        go: <SiGo style={{ color: color || "blue", fontSize: size }} />,
        react: <SiReact style={{ color: color || "blue", fontSize: size }} />,
        vue: <SiVuedotjs style={{ color: color || "green", fontSize: size }} />,
        node: (
            <SiNodedotjs style={{ color: color || "green", fontSize: size }} />
        ),
        express: (
            <SiExpress style={{ color: color || "black", fontSize: size }} />
        ),
        next: (
            <SiNextdotjs style={{ color: color || "black", fontSize: size }} />
        ),
        dgraph: <SiDgraph style={{ color: color || "red", fontSize: size }} />,
        firebase: (
            <SiFirebase style={{ color: color || "orange", fontSize: size }} />
        ),
        mysql: <SiMysql style={{ color: color || "black", fontSize: size }} />,
        mongodb: (
            <SiMongodb style={{ color: color || "green", fontSize: size }} />
        ),
        contentful: (
            <SiContentful style={{ color: color || "blue", fontSize: size }} />
        ),
        figma: <SiFigma style={{ color: color || "black", fontSize: size }} />,
        adobe: (
            <SiAdobecreativecloud
                style={{ color: color || "red", fontSize: size }}
            />
        ),
        jira: <SiJira style={{ color: color || "blue", fontSize: size }} />,
        slack: <SiSlack style={{ color: color || "black", fontSize: size }} />,
        linkedin: (
            <SiLinkedin style={{ color: color || "black", fontSize: size }} />
        ),
        github: (
            <SiGithub style={{ color: color || "black", fontSize: size }} />
        ),
        git: <SiGit style={{ color: color || "green", fontSize: size }} />,
        gmail: <SiGmail style={{ color: color || "black", fontSize: size }} />,
        wordpress: (
            <SiWordpress style={{ color: color || "black", fontSize: size }} />
        ),
    };

    return IconMap[name];
};
