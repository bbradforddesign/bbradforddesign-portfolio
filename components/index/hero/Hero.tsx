import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

type Props = {
    text: Document;
};

export const Hero: React.FC<Props> = ({ text }) => {
    return (
        <section className="section-container">
            <div className="hero-text">
                {text && documentToReactComponents(text)}
            </div>
        </section>
    );
};
