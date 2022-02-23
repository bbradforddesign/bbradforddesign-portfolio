import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SkillList } from "../../shared/skillList/SkillList";
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
            <header className="sticky-header">
                <h2 className="section-header">Experience</h2>
            </header>
            <div className="w-full grid grid-cols-1 md:gap-8 md:grid-cols-3">
                <div className="experience-body body-text md:col-span-2">
                    {documentToReactComponents(text)}
                </div>
                <div className="flex flex-col gap-4">
                    <SkillList title="Languages" list={languages} />
                    <SkillList
                        title="Libraries & Frameworks"
                        list={frameworks}
                    />
                    <SkillList title="Databases" list={databases} />
                    <SkillList title="Tools & Services" list={tools} />
                    <a
                        href={resume.fields.file.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Full Resume"
                        className="my-8"
                    >
                        <button className="outline-button">Full Resume</button>
                    </a>
                </div>
            </div>
        </section>
    );
};
