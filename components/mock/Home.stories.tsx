import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Hero } from "../hero/Hero";
import { About } from "../about/About";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Experience } from "../experience/Experience";

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
    { display: "Job", url: "#" },
    { display: "Projects", url: "#" },
    { display: "Contact", url: "#" },
];

const footerLinks = [
    { icon: "github", url: "https://github.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
    { icon: "email", url: "mailto:test@example.com" },
];

const jobs = [
    {
        bullets: ["testing", "data"],
        company: "Test Company",
        location: "Remote",
        date: "2021-2022",
        tools: ["css", "go"],
        technologies: ["html", "react", "vue"],
        className: "w-1/2 min-w-fit",
    },
    {
        bullets: ["testing", "data"],
        company: "Test Company",
        location: "Remote",
        date: "2021-2022",
        tools: ["css", "go"],
        technologies: ["html", "react", "vue"],
        className: "w-1/2 min-w-fit",
    },
    {
        bullets: ["testing", "data"],
        company: "Test Company",
        location: "Remote",
        date: "2021-2022",
        tools: ["css", "go"],
        technologies: ["html", "react", "vue"],
        className: "w-1/2 min-w-fit",
    },
];

const Template: ComponentStory<typeof Mock> = (args) => (
    <Mock>
        <Navbar links={navLinks} />
        <Hero />
        <About />
        <Experience jobs={jobs} />
        <Footer links={footerLinks} />
    </Mock>
);

export const Default = Template.bind({});
