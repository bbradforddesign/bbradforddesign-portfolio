import Image from "next/image";
import Link from "next/link";
import { createClient, EntryCollection } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IProject, IProjectFields } from "../../@types/generated/contentful";
import { Skeleton } from "../../components/projects/Skeleton";

export const getStaticPaths = async () => {
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
    const res: EntryCollection<IProjectFields> = await client.getEntries({
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
    // always returns array, even if single item
    const { items }: EntryCollection<IProject> = await client.getEntries({
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

    const { title, details, thumbnail, url, sourceCode } = fields;

    return (
        <article className="section-container">
            <header className="my-6 self-start">
                <h2 className="section-header mb-6">{title}</h2>
                <Link href="/#Projects">
                    <a className="nav-link font-semibold text-lg">
                        Back to Projects
                    </a>
                </Link>
            </header>
            <div className="grid lg:grid-cols-2">
                <div className="lg:mx-8 max-w-xl mb-4">
                    <Image
                        src={`https:${thumbnail.fields.file.url}`}
                        objectFit="cover"
                        width={thumbnail.fields.file.details.image?.width}
                        height={thumbnail.fields.file.details.image?.height}
                        className="rounded-xl"
                        alt={thumbnail.fields.description}
                    />
                    <div className="flex gap-2 font-semibold my-4">
                        <a
                            href={url}
                            className="nav-link"
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
                                    className="nav-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            </>
                        )}
                    </div>
                </div>
                <div className="project-body body-text flex flex-col">
                    {documentToReactComponents(details)}
                </div>
            </div>
        </article>
    );
};

export default ProjectDetails;
