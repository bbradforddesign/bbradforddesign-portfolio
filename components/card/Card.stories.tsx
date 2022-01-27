import useState from "react";

import { Card } from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Active: ComponentStory<typeof Card> = () => (
    <Card width="450px">
        <div className="header">
            <h2>Medium</h2>
            <button className="toggle">&mdash;</button>
        </div>

        <p className="date">Remote, 2000-2010</p>

        <div className="body">
            <ul>
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
            <div>
                <h3>Tools</h3>
                <ul className="icon-grid">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
                <h3>Tools</h3>
                <ul className="icon-grid">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                </ul>
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
