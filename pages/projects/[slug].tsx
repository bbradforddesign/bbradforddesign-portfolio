import { createClient, EntryCollection } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IProject, IProjectFields } from "../../@types/generated/contentful";

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
        return <div>Not found!</div>;
    }

    const { title, details } = fields;

    return (
        <div className="section-container mt-16">
            <h2>{title}</h2>
            <div>{documentToReactComponents(details)}</div>
        </div>
    );
};

export default ProjectDetails;
