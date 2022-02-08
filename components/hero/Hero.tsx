import { IHero } from "../../@types/generated/contentful";

type Props = {
    section: IHero;
};

export const Hero: React.FC<Props> = ({ section }) => {
    const { greeting, name, summary } = section.fields;
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
