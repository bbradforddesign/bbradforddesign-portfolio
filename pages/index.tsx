import { createClient, Entry } from "contentful";
import type { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Experience } from "../components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { IHomepage, IHomepageFields } from "../@types/generated/contentful";

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

    // retrieve homepage content by ID
    const response: Entry<IHomepageFields> = await client.getEntry(
        "LBrW2sfLs2xkMbx4o2jJU"
    );

    console.log(response.fields);
    return {
        props: {
            fields: response.fields,
        },
        revalidate: 10,
    };
};

const Home: NextPage<IHomepage> = ({ fields }) => {
    // links to components on home page; won't load generated pages
    // each requires a unique child component, so declared statically
    const homepageLinks: string[] = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    const {
        hero,
        headshot,
        about,
        experience,
        languages,
        frameworks,
        databases,
        tools,
        projects,
        contact,
        socialLinks,
    } = fields;

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
                <Hero text={hero} />
                <About text={about} photo={headshot} />
                <Experience
                    text={experience}
                    languages={languages}
                    frameworks={frameworks}
                    databases={databases}
                    tools={tools}
                />
                <Projects projects={projects} />
                <Contact contact={contact} />
            </main>

            <Footer links={socialLinks} />
        </div>
    );
};

export default Home;
