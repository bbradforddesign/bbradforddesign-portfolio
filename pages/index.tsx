import { createClient, EntryCollection } from "contentful";
import type { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Experience } from "../components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";

import { useTheme } from "../context/ThemeContext";

export const getStaticProps = async () => {
    const token = process.env.CONTENTFUL_ACCESS_TOKEN;
    const space = process.env.CONTENTFUL_SPACE_ID;

    if (!token || !space) {
        throw new Error(
            "Contentful Space ID and Access Token must be provided"
        );
    }

    // configure Contentful credentials
    const client = createClient({
        accessToken: token,
        space: space,
    });

    // retrieve content by type
    const response = await client.getEntries({ content_type: "hero" });
    return {
        props: {
            text: response.items,
        },
        revalidate: 1,
    };
};

type Props = {
    text: EntryCollection<unknown>;
};

const Home: NextPage<Props> = ({ text }) => {
    // links to components on home page; won't load generated pages
    // each requires a unique child component, so declared statically
    const samePageLinks: string[] = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    const { darkMode } = useTheme();

    // placeholder data to be pulled from CMS
    const languages = ["HTML", "CSS"];
    const frameworks = ["React", "NextJS"];
    const databases = ["Dgraph", "MySQL"];
    const tools = ["VSCode", "Vim", "Git", "Github"];
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
    const footerLinks = [
        { icon: "github", url: "https://github.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
        { icon: "email", url: "mailto:test@example.com" },
    ];
    return (
        <div
            className={darkMode ? "text-white bg-black" : "text-black bg-white"}
        >
            <Head>
                <title>bbradforddesign</title>
                <meta name="description" content="Blake Bradford" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar samePageLinks={samePageLinks} />

            <main>
                <Hero
                    greeting={text[0].fields.greeting}
                    name={text[0].fields.name}
                    summary={text[0].fields.summary}
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
            </main>

            <Footer links={footerLinks} />
        </div>
    );
};

export default Home;
