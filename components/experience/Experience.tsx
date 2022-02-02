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
            <p className="body-text w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="font-bold hover:text-slate-400">
                View Resume
            </button>
            <div className="w-3/4 mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
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
        </section>
    );
};
