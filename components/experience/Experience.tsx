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
        <Card width="40%">
            <header className="card-header">
                <h3>{company || "Company"}</h3>
                <button
                    className="toggle"
                    onClick={() => setViewBody((viewBody) => !viewBody)}
                >
                    {viewBody ? <FaMinus /> : <FaPlus />}
                </button>
            </header>
            <p className="date">{renderLocation}</p>
            {viewBody && (
                <div className="card-content">
                    <ul className="experience-details">{renderBullets}</ul>
                    <div className="experience-icons">
                        <section>
                            <h4>Tools</h4>
                            <ul className="icon-grid">{renderTools}</ul>
                        </section>
                        <section>
                            <h4>Technologies</h4>
                            <ul className="icon-grid">{renderTechnologies}</ul>
                        </section>
                    </div>
                </div>
            )}
            <style jsx>{`
                * {
                    font-family: "Roboto", sans-serif;
                }

                p,
                h3,
                h4 {
                    margin: 0;
                }

                h3 {
                    font-size: 1.5rem;
                }

                h4,
                .date {
                    font-size: 1rem;
                }

                p {
                    font-size: 0.85rem;
                    line-height: 1rem;
                }

                li {
                    margin: 0 0 0.5rem;
                }

                .card-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .header {
                    margin: 0.5rem 0;
                }

                .toggle {
                    padding: 0;
                    border: none;
                    background: none;
                    font-weight: bold;
                    font-size: 1.5rem;
                }

                .date {
                    font-style: italic;
                    margin: 0.75rem 0;
                    text-indent: 1rem;
                }

                .experience-details {
                    margin: 1rem 0;
                }

                .icon-grid {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 0;
                    margin: 0.5rem 0;
                }

                .icon-grid li {
                    margin: 0.5rem;
                    list-style: none;
                }

                @media (min-width: 834px) {
                    .card-content {
                        display: flex;
                        flex-direction: column;
                    }

                    .experience-details {
                        flex: 1;
                    }

                    .experience-icons {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .experience-icons section {
                        width: 45%;
                    }
                }

                @media (min-width: 1440px) {
                    .card-content {
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .experience-details {
                        max-width: 45rem;
                    }

                    .experience-icons {
                        flex-direction: column;
                        max-width: 12rem;
                        justify-content: flex-start;
                    }

                    .experience-icons section {
                        width: 100%;
                    }
                }
            `}</style>
        </Card>
    );
};
