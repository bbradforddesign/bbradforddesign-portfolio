import { IProject } from "../../@types/generated/contentful";
import { ProjectCard } from "./projectCard/ProjectCard";

type Props = {
    projects: IProject[];
};

export const Projects: React.FC<Props> = ({ projects }) => {
    const renderProjects = projects.map((e) => {
        const { thumbnail, title, url, summary, technologies } = e.fields;

        return (
            <li key={e.sys.id} className="w-full">
                <ProjectCard
                    thumbnail={thumbnail}
                    title={title}
                    url={url}
                    summary={summary}
                    technologies={technologies}
                />
            </li>
        );
    });

    return (
        <section className="section-container" id="Projects">
            <h2 className="section-header">Projects</h2>
            <ul className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {renderProjects}
            </ul>
        </section>
    );
};
