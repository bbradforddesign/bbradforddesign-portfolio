import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { ContactForm } from "./contactForm/ContactForm";

type Props = {
    contact: Document;
};

export const Contact: React.FC<Props> = ({ contact }) => {
    return (
        <section className="section-container pt-12" id="Contact">
            <header className="self-start my-8">
                <h2 className="section-header">Contact</h2>
            </header>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="w-full body-text">
                    {documentToReactComponents(contact)}
                </div>
                <ContactForm />
            </div>
        </section>
    );
};
