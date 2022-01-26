import { Card } from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Large: ComponentStory<typeof Card> = () => (
    <Card height="30vh" width="40vw">
        <p>Hello!</p>
    </Card>
);

export const Medium: ComponentStory<typeof Card> = () => (
    <Card height="25vh" width="25vw">
        <p>Hello!</p>
    </Card>
);

export const Small: ComponentStory<typeof Card> = () => (
    <Card height="20vh" width="15vw">
        <p>Hello!</p>
    </Card>
);
