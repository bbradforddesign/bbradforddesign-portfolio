import { Project, ProjectCard } from "../projectCard/ProjectCard";

type Props = {
    projects: Project[];
};

export const Projects: React.FC<Props> = ({ projects }) => {
    const renderProjects = projects.map((e) => (
        <li key={e.title} className="w-full">
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
            <ul className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {renderProjects}
            </ul>
        </section>
    );
};
