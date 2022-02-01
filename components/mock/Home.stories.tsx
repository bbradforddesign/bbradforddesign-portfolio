import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Hero } from "../hero/Hero";
import { About } from "../about/About";
import { ComponentStory, ComponentMeta } from "@storybook/react";

type Props = {
    children: React.ReactNode;
};

const Mock: React.FC<Props> = ({ children }) => {
    return <div className="h-auto">{children}</div>;
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
        <Hero />
        <About />
        <Footer links={footerLinks} />
    </Mock>
);

export const Default = Template.bind({});
