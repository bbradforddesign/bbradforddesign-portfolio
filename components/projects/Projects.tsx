import { IProject } from "../../@types/generated/contentful";
import { SummaryCard } from "./summaryCard/SummaryCard";

type Props = {
    projects: IProject[];
};

export const Projects: React.FC<Props> = ({ projects }) => {
    const renderProjects = projects.map((project) => {
        const { thumbnail, title, url, summary, technologies, slug } =
            project.fields;

        return (
            <li key={project.sys.id} className="w-full">
                <SummaryCard
                    thumbnail={thumbnail}
                    title={title}
                    url={url}
                    summary={summary}
                    technologies={technologies}
                    slug={slug}
                />
            </li>
        );
    });

    return (
        <section className="section-container" id="Projects">
            <h2 className="section-header">Projects</h2>
            <ul className="w-full flex flex-col gap-36">{renderProjects}</ul>
        </section>
    );
};
