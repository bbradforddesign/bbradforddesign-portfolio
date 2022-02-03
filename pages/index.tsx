import { createClient, EntryCollection } from "contentful";
import type { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";

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

const links: string[] = ["About"];

const Home: NextPage<Props> = ({ text }) => {
    return (
        <div className="">
            <Head>
                <title>bbradforddesign</title>
                <meta name="description" content="Web Development Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar links={links} />

            <main>
                <Hero
                    greeting={text[0].fields.greeting}
                    name={text[0].fields.name}
                    summary={text[0].fields.summary}
                />
                <About />
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
