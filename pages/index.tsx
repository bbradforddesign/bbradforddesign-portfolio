import { Entry } from "contentful";
import type { NextPage } from "next";
import Head from "next/head";

import client from "../contentful/contentful";
import { Hero } from "../components/index/hero/Hero";
import { About } from "../components/index/about/About";
import { Experience } from "../components/index/experience/Experience";
import { Projects } from "../components/index/projects/Projects";
import { Contact } from "../components/index/contact/Contact";
import { IHomepage, IHomepageFields } from "../@types/generated/contentful";

export const getStaticProps = async () => {
    const homepageID = process.env.CONTENTFUL_HOMEPAGE_ID;

    if (!homepageID) {
        throw new Error("homepage content ID must be provided");
    }

    // retrieve homepage content by ID
    const response: Entry<IHomepageFields> = await client().getEntry(
        homepageID
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
                experience={experience}
                languages={languages}
                frameworks={frameworks}
                databases={databases}
                tools={tools}
            />
            <Projects projects={projects} />
            <Contact contact={contact} />
        </>
    );
};

export default Home;
