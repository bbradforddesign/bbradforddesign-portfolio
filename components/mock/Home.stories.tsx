import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Hero } from "../hero/Hero";
import { ComponentStory, ComponentMeta } from "@storybook/react";

type Props = {
    children: React.ReactNode;
};

const Mock: React.FC<Props> = ({ children }) => {
    return <div className="w-full">{children}</div>;
};

export default {
    title: "Homepage",
    component: Mock,
} as ComponentMeta<typeof Mock>;

const navLinks = [
    { display: "About", url: "#" },
    { display: "Experience", url: "#" },
    { display: "Projects", url: "#" },
    { display: "Contact", url: "#" },
];

const footerLinks = [
    { icon: "github", url: "https://github.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
    { icon: "email", url: "mailto:test@example.com" },
];

const Template: ComponentStory<typeof Mock> = (args) => (
    <Mock>
        <Navbar links={navLinks} />
        <Hero
            name="Blake Bradford"
            introduction="Hello! My name is..."
            summary="...and I'm a full-stack developer from Kansas City"
        />
        <div className="bg-red-100 w-full h-screen" />
        <div className="bg-blue-100 w-full h-screen" />
        <Footer links={footerLinks} />
    </Mock>
);

export const Default = Template.bind({});
