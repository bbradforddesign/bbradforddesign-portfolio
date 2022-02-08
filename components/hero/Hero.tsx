type Props = {
    greeting: string;
    name: string;
    summary: string;
};

export const Hero: React.FC<Props> = ({ greeting, name, summary }) => {
    return (
        <section className="section-container">
            <p className="text-2xl font-medium max-w-2xl px-8">
                <span>{greeting}</span>
                <br />
                <span className="text-5xl font-bold highlight-text">
                    {name}
                </span>
                <br />
                <span>{summary}</span>
            </p>
        </section>
    );
};
