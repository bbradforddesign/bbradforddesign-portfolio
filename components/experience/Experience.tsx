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
            <div className="header">
                <h2>{company || "Company"}</h2>
                <button
                    className="toggle"
                    onClick={() => setViewBody((viewBody) => !viewBody)}
                >
                    {viewBody ? <FaMinus /> : <FaPlus />}
                </button>
            </div>
            <p className="date">{renderLocation}</p>
            {viewBody && (
                <div className="body">
                    <ul id="details">{renderBullets}</ul>
                    <div id="icons">
                        <div>
                            <h3>Tools</h3>
                            <ul className="icon-grid">{renderTools}</ul>
                        </div>
                        <div>
                            <h3>Technologies</h3>
                            <ul className="icon-grid">{renderTechnologies}</ul>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                * {
                    font-family: "Roboto", sans-serif;
                }

                p,
                h1,
                h2,
                h3,
                h4 {
                    margin: 0;
                }

                h2 {
                    font-size: 2rem;
                }

                h3 {
                    font-size: 1.25rem;
                }

                .header {
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
                    font-size: 1.25rem;
                    margin: 0.75rem 0;
                    text-indent: 1rem;
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
                    .body {
                        display: flex;
                        flex-direction: column;
                    }

                    #details {
                        flex: 1;
                        margin: 0 0 1rem;
                    }

                    #icons {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    #icons div {
                        width: 45%;
                    }
                }

                @media (min-width: 1440px) {
                    .body {
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    #details {
                        max-width: 45rem;
                        margin-right: 2rem;
                    }

                    #icons {
                        flex-direction: column;
                        max-width: 12rem;
                        justify-content: flex-start;
                    }

                    #icons div {
                        width: 100%;
                    }
                }
            `}</style>
        </Card>
    );
};
