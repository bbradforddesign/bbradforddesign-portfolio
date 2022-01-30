import { Card } from "./Card";
import { Icon } from "../icon/Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Active: ComponentStory<typeof Card> = () => (
    <div className="w-1/2">
        <Card>
            <div className="w-full flex justify-between items-center">
                <h2 className="text-xl font-bold">Medium</h2>
                <button>&mdash;</button>
            </div>

            <p className="text-md italic">Remote, 2000-2010</p>

            <div className="text-sm md:flex md:flex-col lg:flex-row lg:justify-between">
                <ul className="mt-4 lg:flex-1 lg:max-w-2xl lg:mr-4">
                    <li>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                        set
                    </li>
                    <li>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                        set
                    </li>
                    <li>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                        set
                    </li>
                </ul>
                <div className="mt-4 md:w-full md:flex md:flex-row md:justify-between lg:w-1/4 lg:flex-col lg:max-w-xs lg:justify-start">
                    <div className="md:w-2/5 lg:w-full">
                        <h3>Tools</h3>
                        <ul className="list-none flex flex-row flex-wrap p-0 lg:w-full">
                            <li className="m-1">
                                <Icon name="html" color="orange" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="css" color="blue" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="react" color="cyan" size="sm" />
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-2/5 lg:w-full">
                        <h3>Tools</h3>
                        <ul className="list-none flex flex-row flex-wrap p-0 lg:w-full">
                            <li className="m-1">
                                <Icon name="html" color="orange" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="css" color="blue" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="react" color="cyan" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="go" color="cyan" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="react" color="cyan" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="go" color="cyan" size="sm" />
                            </li>
                            <li className="m-1">
                                <Icon name="react" color="cyan" size="sm" />
                            </li>
                            <li className="m-1">
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
            `}</style>
        </Card>
    </div>
);

export const Inactive: ComponentStory<typeof Card> = () => (
    <Card>
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
