import { format } from "date-fns";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SkillList } from "../../shared/skillList/SkillList";
import { Asset } from "contentful";
import { IExperience } from "../../../@types/generated/contentful";

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
    const renderExperience = () =>
        experience.map(({ fields }, index) => {
            const { organization, title, startDate, endDate, summary } = fields;

            const formatDate = (dateString: string) =>
                format(new Date(dateString), "MMM yyyy");

            return (
                <li key={index}>
                    <h3 className="text-2xl md:text-3xl">{organization}</h3>
                    <p className="flex justify-between my-4">
                        <b className="text-lg md:text-xl">{title}</b>
                        <i className="text-base md:text-lg">
                            {`${formatDate(startDate)} | ${
                                endDate ? formatDate(endDate) : "Present"
                            }`}
                        </i>
                    </p>
                    <div className="experience-body">
                        {summary && documentToReactComponents(summary)}
                    </div>
                </li>
            );
        });

    return (
        <section className="section-container" id="Experience">
            <header className="self-start w-full my-12 pt-12">
                <h2 className="section-header">Experience</h2>
            </header>
            <div className="w-full grid grid-cols-1 md:gap-8 md:grid-cols-3">
                <ul className="experience-body body-text md:col-span-2">
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
                        <button className="outline-button">Full Resume</button>
                    </a>
                </div>
            </div>
        </section>
    );
};
