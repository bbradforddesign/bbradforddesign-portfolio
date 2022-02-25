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
        <section className="section-container pt-24" id="Projects">
            <header className="self-start w-full mb-12">
                <h2 className="section-header">Projects</h2>
            </header>
            <ul className="w-full mb-24 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-36">
                {renderProjects}
            </ul>
        </section>
    );
};
