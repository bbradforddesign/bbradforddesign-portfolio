import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Hero } from "../hero/Hero";
import { About } from "../about/About";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Projects } from "../projects/Projects";
import { Experience } from "../experience/Experience";
import { Contact } from "../contact/Contact";

type Props = {
    children: React.ReactNode;
};

const Mock: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default {
    title: "Homepage",
    component: Mock,
} as ComponentMeta<typeof Mock>;

const navLinks = [
    { display: "About", url: "#" },
    { display: "Projects", url: "#" },
    { display: "Experience", url: "#" },
    { display: "Contact", url: "#" },
];

const footerLinks = [
    { icon: "github", url: "https://github.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
    { icon: "email", url: "mailto:test@example.com" },
];

const projects = [
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

const languages = ["html", "css", "javascript", "typescript", "go"];
const frameworks = ["react", "express", "node", "next", "wordpress"];
const databases = ["dgraph", "firebase", "mongodb", "mysql"];
const tools = ["contentful", "figma", "adobe", "jira", "slack"];

const Template: ComponentStory<typeof Mock> = (args) => (
    <Mock>
        <Navbar links={navLinks} />
        <Hero
            greeting="Hello! My name is..."
            name="Blake Bradford"
            summary="...and I'm a full-stack developer from Kansas City, KS"
        />
        <About />
        <Experience
            languages={languages}
            frameworks={frameworks}
            databases={databases}
            tools={tools}
        />
        <Projects projects={projects} />
        <Contact />
        <Footer links={footerLinks} />
    </Mock>
);

export const Default = Template.bind({});
