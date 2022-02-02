import { ExperienceList } from "../experienceList/ExperienceList";

type Props = {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
};

export const Experience: React.FC<Props> = ({
    languages,
    frameworks,
    databases,
    tools,
}) => {
    return (
        <section className="section-container">
            <h2 className="section-header">Experience</h2>
            <div className="w-3/4 mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {languages.length > 0 && (
                    <ExperienceList title="Languages" list={languages} />
                )}
                {frameworks.length > 0 && (
                    <ExperienceList
                        title="Libraries & Frameworks"
                        list={frameworks}
                    />
                )}
                {databases.length > 0 && (
                    <ExperienceList title="Databases" list={databases} />
                )}
                {tools.length > 0 && (
                    <ExperienceList title="Tools" list={tools} />
                )}
            </div>
            <button className="my-4">View Resume</button>
        </section>
    );
};
