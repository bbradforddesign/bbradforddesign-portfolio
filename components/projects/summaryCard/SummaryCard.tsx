import { IProjectFields } from "../../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

import { SkillList } from "../../skillList/SkillList";
import Image from "next/image";

export const SummaryCard: React.FC<IProjectFields> = ({
    thumbnail,
    title,
    url,
    summary,
    technologies,
    slug,
}) => {
    return (
        <section className="w-full relative">
            <div
                className={`relative h-60 md:h-80 lg:h-96 w-5/6 shadow-md rounded-md bg-slate-900`}
            >
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt="Project thumbnail image"
                    className="rounded-md opacity-50 hover:opacity-100 transition"
                />
            </div>
            <div
                className={`z-10 absolute -bottom-24 md:-bottom-16 right-0 w-5/6 md:w-auto`}
            >
                <div className="shadow-md bg-white dark:bg-slate-800 md:h-auto py-2 px-4 rounded-md mb-2">
                    <header className="text-xl font-bold my-2">
                        <h3>{title}</h3>
                    </header>
                    <div className="project-card-summary body-text my-2 w-auto">
                        {documentToReactComponents(summary)}
                    </div>
                    <SkillList list={technologies} />
                </div>
                <div className="flex justify-end gap-4">
                    <a
                        className="nav-link"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Project
                    </a>
                    <span className="font-bold">|</span>
                    <Link href={`projects/${slug}`}>
                        <a className="nav-link">Learn More</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};
