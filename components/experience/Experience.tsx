import { useState } from "react";
import { Card } from "../card/Card";
import { Icon } from "../icon/Icon";

import { FaMinus, FaPlus } from "react-icons/fa";

import { Technology } from "../../shared/constants";

type Props = {
    bullets: string[];
    tools: Technology[];
    technologies: Technology[];
    company: string;
    date: string;
    location: string;
};

export const Experience: React.FC<Props> = ({
    bullets,
    tools,
    technologies,
    company,
    date,
    location,
}) => {
    const [viewBody, setViewBody] = useState<boolean>(true);

    const renderLocation =
        location && date ? `${location}, ${date}` : "Location, 2000-2010";

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
        <Card className="w-1/2">
            <section className="w-full h-full">
                <header className="text-xl font-bold w-full flex justify-between items-center">
                    <h3>{company || "Company"}</h3>
                    <button
                        onClick={() => setViewBody((viewBody) => !viewBody)}
                    >
                        {viewBody ? <FaMinus /> : <FaPlus />}
                    </button>
                </header>
                <p className="text-md italic">{renderLocation}</p>
                {viewBody && (
                    <div className="text-md md:flex md:flex-col lg:flex-row lg:justify-between">
                        <ul className="mt-4 list-disc ml-4 lg:flex-1 lg:max-w-2xl lg:mr-4">
                            {renderBullets}
                        </ul>
                        <div className="mt-4 gap-4 md:w-full md:flex md:flex-row md:justify-between lg:w-1/4 lg:flex-col lg:max-w-xs lg:justify-start">
                            <section>
                                <h4 className="text-lg font-bold">Tools</h4>
                                <ul className="list-none flex flex-row flex-wrap p-0 my-2 gap-2 lg:w-full">
                                    {renderTools}
                                </ul>
                            </section>
                            <section>
                                <h4 className="text-lg font-bold">
                                    Technologies
                                </h4>
                                <ul className="list-none flex flex-row flex-wrap p-0 my-2 gap-2 lg:w-full">
                                    {renderTechnologies}
                                </ul>
                            </section>
                        </div>
                    </div>
                )}
            </section>
        </Card>
    );
};
