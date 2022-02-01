import { Project, ProjectCard } from "../projectCard/ProjectCard";

type Props = {
    projects: Project[];
};

export const Projects: React.FC<Props> = ({ projects }) => {
    const renderProjects = projects.map((e) => (
        <li key={e.title} className="w-full p-2 md:w-1/2">
            <ProjectCard
                bullets={e.bullets}
                title={e.title}
                tools={e.tools}
                technologies={e.technologies}
            />
        </li>
    ));
    return (
        <section className="section-container">
            <h2 className="section-header">Projects</h2>
            <ul className="flex flex-row flex-wrap">{renderProjects}</ul>
        </section>
    );
};
