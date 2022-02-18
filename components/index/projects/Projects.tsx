import { IProject } from "../../../@types/generated/contentful";
import { SummaryCard } from "./summaryCard/SummaryCard";

type Props = {
    projects: IProject[];
};

export const Projects: React.FC<Props> = ({ projects }) => {
    const renderProjects = projects.map((project) => {
        return (
            <li key={project.sys.id} className="w-full max-w-xl">
                <SummaryCard fields={project.fields} />
            </li>
        );
    });

    return (
        <section className="section-container py-12" id="Projects">
            <header className="self-start my-8">
                <h2 className="section-header">Projects</h2>
            </header>
            <ul className="w-full grid md:grid-cols-2 gap-y-36 gap-x-24">
                {renderProjects}
            </ul>
        </section>
    );
};
