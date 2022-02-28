import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

type Props = {
    text: Document;
};

export const Hero: React.FC<Props> = ({ text }) => {
    return (
        <section className="section-container pt-24">
            <div className="hero-text w-fit mx-auto prose-p:text-2xl prose-p:font-medium prose-p:max-w-2xl">
                {text && documentToReactComponents(text)}
            </div>
        </section>
    );
};
