import { createClient } from "contentful";

// configures credentials, returns client
const client = () => {
    const token = process.env.CONTENTFUL_ACCESS_TOKEN;
    const space = process.env.CONTENTFUL_SPACE_ID;

    if (!token || !space) {
        throw new Error(
            "Contentful Space ID and Access Token must be provided"
        );
    }

    return createClient({
        accessToken: token,
        space: space,
    });
};

export default client;
