import Link from "next/link";
import { EntryCollection } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import client from "../../contentful/contentful";
import { IProject, IProjectFields } from "../../@types/generated/contentful";
import { Skeleton } from "../../components/projects/Skeleton";
import { ImageStepper } from "../../components/shared/imageStepper/ImageStepper";
import Head from "next/head";

export const getStaticPaths = async () => {
    const token = process.env.CONTENTFUL_ACCESS_TOKEN;
    const space = process.env.CONTENTFUL_SPACE_ID;

    if (!token || !space) {
        throw new Error(
            "Contentful Space ID and Access Token must be provided"
        );
    }

    const res: EntryCollection<IProjectFields> = await client().getEntries({
        content_type: "project",
    });

    // get all path slugs
    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        };
    });

    return {
        paths,
        fallback: true, // direct to fallback if page not found
    };
};

// get single project based on path. called once per project
export const getStaticProps = async ({
    params,
}: {
    params: IProjectFields;
}) => {
    // always returns array, even if single item
    const { items }: EntryCollection<IProject> = await client().getEntries({
        content_type: "project",
        "fields.slug": params.slug, // get item by slug
    });

    // redirect if no data
    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: items[0],
        revalidate: 10, // interval for incremental static regen
    };
};

const ProjectDetails: React.FC<IProject> = ({ fields }) => {
    if (!fields || !fields.details) {
        return <Skeleton />;
    }

    const { title, details, url, sourceCode, featuredImages } = fields;

    return (
        <>
            <Head>
                <title>Blake Bradford | {title}</title>
                <meta
                    name="description"
                    content={`Project details page for ${title}`}
                />
            </Head>
            <article className="section-container pt-9">
                <header className="mb-6 self-start">
                    <h2 className="section-header mb-6">{title}</h2>
                    <Link href="/#Projects">
                        <a className="animated-link font-semibold text-lg">
                            Back to Projects
                        </a>
                    </Link>
                </header>
                <div className="grid lg:grid-cols-2">
                    <div className="lg:mx-8 max-w-xl mb-4">
                        <ImageStepper images={featuredImages} />
                        <div className="flex gap-2 font-semibold my-4">
                            <a
                                href={url}
                                className="animated-link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Project
                            </a>
                            {sourceCode && (
                                <>
                                    <span>|</span>
                                    <a
                                        href={sourceCode}
                                        className="animated-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Source Code
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="prose-h3:text-3xl prose-h3:mt-4 prose-h3:mb-2 prose-ul:list-disc prose-ul:ml-10 prose-p:my-2 body-text flex flex-col">
                        {documentToReactComponents(details)}
                    </div>
                </div>
            </article>
        </>
    );
};

export default ProjectDetails;
