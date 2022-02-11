import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SkillList } from "../skillList/SkillList";
import { Asset } from "contentful";

type Props = {
    text: Document;
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    resume: Asset;
};

export const Experience: React.FC<Props> = ({
    text,
    languages,
    frameworks,
    databases,
    tools,
    resume,
}) => {
    return (
        <section className="section-container" id="Experience">
            <h2 className="section-header">Experience</h2>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col md:w-4/5">
                    <div className="body-text w-full">
                        {documentToReactComponents(text)}
                    </div>
                    <a
                        href={resume.fields.file.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Full Resume"
                    >
                        <button className="solid-button self-center mt-4">
                            Full Resume
                        </button>
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <SkillList title="Languages" list={languages} />
                    <SkillList
                        title="Libraries & Frameworks"
                        list={frameworks}
                    />
                    <SkillList title="Databases" list={databases} />
                    <SkillList title="Tools & Services" list={tools} />
                </div>
            </div>
        </section>
    );
};
