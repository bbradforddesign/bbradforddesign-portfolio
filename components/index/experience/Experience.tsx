import { SkillList } from "../../shared/skillList/SkillList";
import { IExperience } from "../../../@types/generated/contentful";

import { ExperienceSummary } from "./summary/Summary";

type Props = {
    experience: IExperience[];
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
};

export const Experience: React.FC<Props> = ({
    experience,
    languages,
    frameworks,
    databases,
    tools,
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
        <section className="section-container pt-24" id="Experience">
            <header className="self-start w-full mb-12">
                <h2 className="section-header">Experience</h2>
            </header>
            <div className="w-full grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3">
                <ul className="experience-body w-full md:col-span-2 divide-y-2">
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
                </div>
            </div>
        </section>
    );
};
