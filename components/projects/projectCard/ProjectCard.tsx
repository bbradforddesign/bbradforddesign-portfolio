import { IProjectFields } from "../../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { SkillList } from "../../skillList/SkillList";

export const ProjectCard: React.FC<IProjectFields> = ({
    thumbnail,
    title,
    url,
    summary,
    technologies,
}) => {
    return (
        <section className="card w-full h-full flex flex-col justify-between">
            <header className="text-xl font-bold">
                <h3>{title}</h3>
            </header>
            <div className="project-card-summary my-4 ml-4 w-auto max-w-prose md:mr-4">
                {documentToReactComponents(summary)}
            </div>
            <section>
                <h4 className="text-md font-bold mb-2">Tools & Technologies</h4>
                <SkillList list={technologies} />
            </section>
        </section>
    );
};
