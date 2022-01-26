import { Card } from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Large: ComponentStory<typeof Card> = () => (
    <Card width="40vw">
        <p>Hello!</p>
    </Card>
);

export const Medium: ComponentStory<typeof Card> = () => (
    <Card width="25vw">
        <p>Hello!</p>
    </Card>
);

export const Small: ComponentStory<typeof Card> = () => (
    <Card width="15vw">
        <h2>Hello!</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Card>
);
