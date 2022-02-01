import { Card } from "../card/Card";
import { Icon } from "../icon/Icon";
import { Technology } from "../../shared/constants";

export type Project = {
    bullets: string[];
    tools: Technology[];
    technologies: Technology[];
    title: string;
};

export const ProjectCard: React.FC<Project> = ({
    bullets,
    tools,
    technologies,
    title,
}) => {
    const renderBullets =
        bullets?.length &&
        bullets.map((e) => (
            <li key="e">
                <p>{e}</p>
            </li>
        ));

    const renderTools =
        tools?.length &&
        tools.map((e) => (
            <li key={e}>
                <Icon name={e} size="sm" color="black" />
            </li>
        ));

    const renderTechnologies =
        technologies?.length &&
        technologies.map((e) => (
            <li key={e}>
                <Icon name={e} size="sm" color="black" />
            </li>
        ));

    return (
        <Card className={`min-w-fit`}>
            <section className="w-full h-full">
                <header className="text-xl font-bold w-full flex justify-between items-center gap-8">
                    <h3>{title || "Project Title"}</h3>
                </header>
                <div className="text-md w-full flex justify-between md:flex-col">
                    <ul className="mt-4 list-disc ml-4 w-auto max-w-2xl md:mr-4">
                        {renderBullets}
                    </ul>
                    <div className="mt-4 w-auto flex  flex-col gap-4 justify-between md:flex-row">
                        <section>
                            <h4 className="text-lg font-bold">Tools</h4>
                            <ul className="list-none flex flex-row flex-wrap p-0 my-2 gap-2">
                                {renderTools}
                            </ul>
                        </section>
                        <section>
                            <h4 className="text-lg font-bold">Technologies</h4>
                            <ul className="list-none flex flex-row flex-wrap p-0 my-2 gap-2">
                                {renderTechnologies}
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        </Card>
    );
};
