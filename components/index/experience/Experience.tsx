import { SkillList } from "../../shared/skillList/SkillList";
import { Asset } from "contentful";
import { IExperience } from "../../../@types/generated/contentful";

import { ExperienceSummary } from "./summary/Summary";

type Props = {
    experience: IExperience[];
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    resume: Asset;
};

export const Experience: React.FC<Props> = ({
    experience,
    languages,
    frameworks,
    databases,
    tools,
    resume,
}) => {
    const renderExperience = () => {
        return experience.map((e, index) => {
            return (
                <li key={index}>
                    <ExperienceSummary fields={e.fields} />
                </li>
            );
        });
    };

    return (
        <section className="section-container" id="Experience">
            <header className="self-start w-full my-12 pt-12">
                <h2 className="section-header">Experience</h2>
            </header>
            <div className="w-full grid grid-cols-1 md:gap-12 md:grid-cols-3">
                <ul className="flex flex-col gap-4 experience-body body-text md:col-span-2">
                    {renderExperience()}
                </ul>
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
                        <button className="outline-button">Resume PDF</button>
                    </a>
                </div>
            </div>
        </section>
    );
};
