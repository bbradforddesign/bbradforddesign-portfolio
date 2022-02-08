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
    const response = await client.getEntries({ content_type: "page" });
    const parsedResponse = await client.parseEntries(response);
    return {
        props: {
            sections: parsedResponse.items[0].fields.sections,
        },
        revalidate: 1,
    };
};

type Props = {
    sections: EntryCollection<unknown>;
};

const Home: NextPage<Props> = ({ sections }) => {
    // links to components on home page; won't load generated pages
    // each requires a unique child component, so declared statically
    const homepageLinks: string[] = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    const heroSection = sections.filter(
        (e) => e.sys.contentType.sys.id === "hero"
    )[0];

    const aboutSection = sections.filter(
        (e) => e.sys.contentType.sys.id === "about"
    )[0];

    const languages = ["HTML", "CSS"];
    const frameworks = ["React", "NextJS"];
    const databases = ["Dgraph", "MySQL"];
    const tools = ["VSCode", "Vim", "Git", "Github"];
    const projects = [
        {
            bullets: ["testing", "data"],
            title: "A",
            technologies: ["html", "react", "vue"],
        },
        {
            bullets: ["testing", "data"],
            title: "B",
            technologies: ["html", "react", "vue"],
        },
        {
            bullets: ["testing", "data"],
            title: "C",
            technologies: ["html", "react", "vue"],
        },
    ];
    const footerLinks = [
        { icon: "github", url: "https://github.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
        { icon: "email", url: "mailto:test@example.com" },
    ];
    return (
        <div className="dark:bg-slate-900">
            <Head>
                <title>bbradforddesign</title>
                <meta name="description" content="Blake Bradford" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora:wght@600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar homepageLinks={homepageLinks} />

            <main>
                <Hero section={heroSection} />
                <About section={aboutSection} />
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
