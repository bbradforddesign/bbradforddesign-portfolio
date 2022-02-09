import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SkillList } from "../skillList/SkillList";

type Props = {
    text?: Document;
    languages?: string[];
    frameworks?: string[];
    databases?: string[];
    tools?: string[];
};

export const Experience: React.FC<Props> = ({
    text,
    languages,
    frameworks,
    databases,
    tools,
}) => {
    return (
        <section className="section-container" id="Experience">
            <h2 className="section-header">Experience</h2>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <div className="w-full body-text">
                        {text && documentToReactComponents(text)}
                    </div>
                    <button className="solid-button mt-4">View Resume</button>
                </div>
                <div className="flex flex-col gap-4">
                    {languages && (
                        <SkillList title="Languages" list={languages} />
                    )}
                    {frameworks && (
                        <SkillList
                            title="Libraries & Frameworks"
                            list={frameworks}
                        />
                    )}
                    {databases && (
                        <SkillList title="Databases" list={databases} />
                    )}
                    {tools && (
                        <SkillList title="Tools & Services" list={tools} />
                    )}
                </div>
            </div>
        </section>
    );
};
