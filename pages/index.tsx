import { createClient, Entry } from "contentful";
import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Experience } from "../components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { Contact } from "../components/contact/Contact";
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

    return {
        props: response,
        revalidate: 10,
    };
};

const Home: NextPage<IHomepage> = ({ fields }) => {
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
        resume,
    } = fields;

    return (
        <>
            <Head>
                <title>bbradforddesign</title>
                <meta name="description" content="Blake Bradford" />
            </Head>
            <Hero text={hero} />
            <About text={about} photo={headshot} />
            <Experience
                text={experience}
                languages={languages}
                frameworks={frameworks}
                databases={databases}
                tools={tools}
                resume={resume}
            />
            <Projects projects={projects} />
            <Contact contact={contact} />
        </>
    );
};

export default Home;
