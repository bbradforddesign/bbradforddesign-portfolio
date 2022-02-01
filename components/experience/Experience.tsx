type Props = {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
};

export const Experience: React.FC<Props> = ({
    languages,
    frameworks,
    databases,
    tools,
}) => {
    const renderLanguages = languages.map((e) => <li key={e}>{e}</li>);
    const renderFrameworks = frameworks.map((e) => <li key={e}>{e}</li>);
    const renderDatabases = databases.map((e) => <li key={e}>{e}</li>);
    const renderTools = tools.map((e) => <li key={e}>{e}</li>);

    return (
        <section className="section-container">
            <h2 className="section-header">Experience</h2>
            <div className="w-3/4 mb-4 flex flex-col gap-4 justify-between md:flex-row">
                <section className="w-full md:w-1/4">
                    <h3>Languages</h3>
                    <ul className="flex gap-2 flex-wrap">{renderLanguages}</ul>
                </section>
                <section className="w-full md:w-1/4">
                    <h3>Libraries & Frameworks</h3>
                    <ul className="flex gap-2 flex-wrap">{renderFrameworks}</ul>
                </section>
                <section className="w-full md:w-1/4">
                    <h3>Databases</h3>
                    <ul className="flex gap-2 flex-wrap">{renderDatabases}</ul>
                </section>
                <section className="w-full md:w-1/4">
                    <h3>Tools</h3>
                    <ul className="flex gap-2 flex-wrap">{renderTools}</ul>
                </section>
            </div>
            <button className="my-4">View Resume</button>
        </section>
    );
};
