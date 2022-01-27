import React from "react";
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
} from "react-icons/si";

type Props = {
    name: Technology | Social;
    size: Size;
    color: string;
};

type Technology = "html" | "css" | "js" | "react" | "vue" | "go";

type Social = "linkedin" | "github" | "email";

type Size = "sm" | "md" | "lg";

const iconSize = (size: Size) => {
    switch (size) {
        case "sm":
            return "30px";
        case "md":
            return "60px";
        case "lg":
            return "90px";
        default:
            return "100px";
    }
};

export const Icon: React.FC<Props> = ({ name, size, color }) => {
    const style: React.CSSProperties = {
        fontSize: iconSize(size),
        color: color,
    };

    switch (name) {
        case "html":
            return <SiHtml5 style={style} />;
        case "css":
            return <SiCss3 style={style} />;
        case "js":
            return <SiJavascript style={style} />;
        case "react":
            return <SiReact style={style} />;
        case "vue":
            return <SiVuedotjs style={style} />;
        case "go":
            return <SiGo style={style} />;
        case "linkedin":
            return <SiLinkedin style={style} />;
        case "github":
            return <SiGithub style={style} />;
        case "email":
            return <SiGmail style={style} />;
        default:
            return <p>Icon not found!</p>;
    }
};
