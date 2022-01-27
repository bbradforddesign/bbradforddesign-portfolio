import { Card } from "./Card";
import { Icon } from "../icon/Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Active: ComponentStory<typeof Card> = () => (
    <Card width="50vw">
        <div className="header">
            <h2>Medium</h2>
            <button className="toggle">&mdash;</button>
        </div>

        <p className="date">Remote, 2000-2010</p>

        <div className="body">
            <ul id="details">
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
                <li>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, set
                </li>
            </ul>
            <div id="icons">
                <div>
                    <h3>Tools</h3>
                    <ul className="icon-grid">
                        <li>
                            <Icon name="html" color="orange" size="sm" />
                        </li>
                        <li>
                            <Icon name="css" color="blue" size="sm" />
                        </li>
                        <li>
                            <Icon name="react" color="cyan" size="sm" />
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul className="icon-grid">
                        <li>
                            <Icon name="html" color="orange" size="sm" />
                        </li>
                        <li>
                            <Icon name="css" color="blue" size="sm" />
                        </li>
                        <li>
                            <Icon name="react" color="cyan" size="sm" />
                        </li>
                        <li>
                            <Icon name="go" color="cyan" size="sm" />
                        </li>
                        <li>
                            <Icon name="html" color="orange" size="sm" />
                        </li>
                        <li>
                            <Icon name="css" color="blue" size="sm" />
                        </li>
                        <li>
                            <Icon name="react" color="cyan" size="sm" />
                        </li>
                        <li>
                            <Icon name="go" color="cyan" size="sm" />
                        </li>
                        <li>
                            <Icon name="html" color="orange" size="sm" />
                        </li>
                        <li>
                            <Icon name="css" color="blue" size="sm" />
                        </li>
                        <li>
                            <Icon name="react" color="cyan" size="sm" />
                        </li>
                        <li>
                            <Icon name="go" color="cyan" size="sm" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <style jsx>{`
            * {
                font-family: "Roboto", sans-serif;
            }
            .header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
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
            }
            .icon-grid {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                padding: 0;
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
                    flex: 1;
                    max-width: 50rem;
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

export const Inactive: ComponentStory<typeof Card> = () => (
    <Card width="450px">
        <div className="header">
            <h2>Medium</h2>
            <button className="toggle">&mdash;</button>
        </div>

        <p className="date">Remote, 2000-2010</p>

        <style jsx>{`
            * {
                font-family: "Roboto", sans-serif;
            }
            .header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
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
            }
            .icon-grid {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                padding: 0;
            }
            .icon-grid li {
                margin: 0.5rem;
                list-style: none;
            }
        `}</style>
    </Card>
);
