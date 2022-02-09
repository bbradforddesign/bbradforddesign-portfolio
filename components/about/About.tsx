import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

type Props = {
    text: Document;
    photo: Asset;
};

export const About: React.FC<Props> = ({ text, photo }) => {
    return (
        <section className="section-container" id="About">
            <h2 className="section-header">About</h2>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center max-h-96">
                    <Image
                        src={`https:${photo.fields.file.url}`}
                        width={300}
                        height={300}
                        objectFit="cover"
                        className="object-top card"
                        alt="Professional headshot for About section"
                    />
                </div>
                <div className="w-full body-text">
                    {documentToReactComponents(text)}
                </div>
            </div>
        </section>
    );
};
