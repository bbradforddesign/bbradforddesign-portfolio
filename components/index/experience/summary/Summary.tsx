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
        <section className="p-4">
            <header className="flex justify-between items-center">
                <h3 className="text-2xl">{organization}</h3>
                <button
                    onClick={() =>
                        setOpenDetails((openDetails) => !openDetails)
                    }
                    className="w-4 h-4 relative"
                    aria-label="Summary toggle"
                >
                    <span
                        className={`summary-toggle hover:opacity-50 ${
                            openDetails
                                ? "summary-toggle-active"
                                : "summary-toggle-inactive"
                        }`}
                    />
                </button>
            </header>
            <p className="flex justify-between items-center my-2">
                <span className="font-semibold">{title}</span>
                <span className="italic">
                    {`${formatDate(startDate)} | ${
                        endDate ? formatDate(endDate) : "Present"
                    }`}
                </span>
            </p>
            {openDetails && (
                <div className="experience-body body-text pt-2">
                    {documentToReactComponents(summary)}
                </div>
            )}
        </section>
    );
};
