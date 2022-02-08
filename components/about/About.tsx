import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAbout } from "../../@types/generated/contentful";

type Props = {
    section: IAbout;
};

export const About: React.FC<Props> = ({ section }) => {
    const { body, profile } = section.fields;

    return (
        <section className="section-container" id="About">
            <h2 className="section-header">About</h2>
            <div className=" w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <Image
                    className="w-full"
                    src={`https:${profile?.fields.file.url}`}
                    width={profile?.fields.file.details.image?.width}
                    height={profile?.fields.file.details.image?.height}
                    alt="Professional headshot for About section"
                />
                <div className="w-full body-text">
                    {body && documentToReactComponents(body)}
                </div>
            </div>
        </section>
    );
};
