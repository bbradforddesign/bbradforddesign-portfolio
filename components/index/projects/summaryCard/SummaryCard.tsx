import { IProjectFields } from "../../../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

import { SkillList } from "../../../shared/skillList/SkillList";
import Image from "next/image";

type Props = {
    fields: IProjectFields;
};

export const SummaryCard: React.FC<Props> = ({ fields }) => {
    const { thumbnail, title, summary, technologies, url, details, slug } =
        fields;

    return (
        <section className="w-full relative">
            <div className={`relative w-full h-96 shadow-md rounded-md`}>
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt="Project thumbnail image"
                    className="rounded-md"
                />
            </div>
            <div className="z-10 absolute -bottom-24 md:-bottom-16 right-0 w-5/6">
                <div className="shadow-md bg-white dark:bg-slate-800 md:h-auto py-2 px-4 rounded-md mb-2">
                    <header className="text-xl font-bold my-2">
                        <h3>{title}</h3>
                    </header>
                    <div className="body-text w-auto">
                        {documentToReactComponents(summary)}
                    </div>
                    <SkillList list={technologies} />
                </div>
                <div className="flex justify-end gap-4">
                    <a
                        className="animated-link font-semibold"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Project
                    </a>
                    {details && (
                        <>
                            <span className="font-semibold">|</span>
                            <Link href={`/projects/${slug}`}>
                                <a className="animated-link font-semibold">
                                    Learn More
                                </a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
