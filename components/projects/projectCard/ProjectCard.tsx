import { IProjectFields } from "../../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { SkillList } from "../../skillList/SkillList";
import Image from "next/image";

export const ProjectCard: React.FC<IProjectFields> = ({
    thumbnail,
    title,
    url,
    summary,
    technologies,
}) => {
    return (
        <section className="card w-full h-full flex flex-col justify-between">
            <a href={url} target="_blank" rel="noreferrer">
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt="Project thumbnail image"
                    className="rounded-lg h-80 absolute inset-0 hover:opacity-50"
                />
            </a>
            <header className="text-xl font-bold my-2">
                <h3>{title}</h3>
            </header>
            <div className="project-card-summary my-2 ml-4 w-auto max-w-prose md:mr-4">
                {documentToReactComponents(summary)}
            </div>
            <section>
                <h4 className="text-md font-bold my-2">Tools & Technologies</h4>
                <SkillList list={technologies} />
            </section>
        </section>
    );
};
