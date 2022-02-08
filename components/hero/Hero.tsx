import { IHero } from "../../@types/generated/contentful";

type Props = {
    section: IHero;
};

export const Hero: React.FC<Props> = ({ section }) => {
    return (
        <section className="section-container">
            <p className="text-2xl font-medium max-w-2xl px-8">
                <span>{section.fields.greeting}</span>
                <br />
                <span className="text-5xl font-bold highlight-text">
                    {section.fields.name}
                </span>
                <br />
                <span>{section.fields.summary}</span>
            </p>
        </section>
    );
};
