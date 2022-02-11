import { IProjectFields } from "../../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { SkillList } from "../../skillList/SkillList";
import Image from "next/image";

export const SummaryCard: React.FC<IProjectFields> = ({
    thumbnail,
    title,
    url,
    summary,
    technologies,
}) => {
    return (
        <section className="card w-full h-full flex flex-col justify-between">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg h-60 relative"
            >
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt="Project thumbnail image"
                    className="rounded-lg hover:opacity-40"
                />
            </a>
            <header className="text-xl font-bold my-2">
                <h3>{title}</h3>
            </header>
            <div className="project-card-summary my-2 ml-4 w-auto max-w-prose md:mr-4">
                {documentToReactComponents(summary)}
            </div>
            <SkillList list={technologies} />
        </section>
    );
};