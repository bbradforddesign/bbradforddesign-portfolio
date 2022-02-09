export type Project = {
    bullets: string[];
    technologies: string[];
    title: string;
};

export const ProjectCard: React.FC<Project> = ({
    bullets,
    technologies,
    title,
}) => {
    const renderBullets =
        bullets?.length &&
        bullets.map((e) => (
            <li key={e}>
                <p>{e}</p>
            </li>
        ));

    const renderListItems = (list: Array<string>) =>
        list.map((e) => (
            <li key={e} className="py-1 px-2 rounded-md highlight-background">
                <p className="font-semibold text-sm">{e}</p>
            </li>
        ));

    return (
        <section className="card w-full h-full flex flex-col justify-between">
            <header className="text-xl font-bold">
                <h3>{title || "Project Title"}</h3>
            </header>
            <ul className="my-4 list-disc ml-4 w-auto max-w-2xl md:mr-4">
                {renderBullets}
            </ul>
            <section>
                <h4 className="text-md font-bold mb-2">Tools & Technologies</h4>
                <ul className="flex gap-1 w-full">
                    {renderListItems(technologies)}
                </ul>
            </section>
        </section>
    );
};
