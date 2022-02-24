import { useState } from "react";
import { format } from "date-fns";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IExperienceFields } from "../../../../@types/generated/contentful";

type Props = {
    fields: IExperienceFields;
};

export const ExperienceSummary: React.FC<Props> = ({ fields }) => {
    const [openDetails, setOpenDetails] = useState<boolean>(false);

    const { organization, title, startDate, endDate, summary } = fields;

    const formatDate = (dateString: string) =>
        format(new Date(dateString), "MMM yyyy");

    return (
        <section className="card">
            <header className="flex justify-between">
                <h3 className="text-xl md:text-2xl">{organization}</h3>
                <button
                    onClick={() =>
                        setOpenDetails((openDetails) => !openDetails)
                    }
                    className="text-2xl font-black"
                >
                    {openDetails ? "-" : "+"}
                </button>
            </header>
            <p className="flex justify-between my-4">
                <span className="font-semibold text-base md:text-lg">
                    {title}
                </span>
                <span className="italic text-base md:text-lg">
                    {`${formatDate(startDate)} | ${
                        endDate ? formatDate(endDate) : "Present"
                    }`}
                </span>
            </p>
            {openDetails && (
                <div className="experience-body">
                    {documentToReactComponents(summary)}
                </div>
            )}
        </section>
    );
};
