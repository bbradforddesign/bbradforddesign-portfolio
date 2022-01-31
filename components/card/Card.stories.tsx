import { Card } from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStory<typeof Card> = () => (
    <Card className="w-60">
        <p>Hello, card!</p>
        <p>This is a simple container component.</p>
    </Card>
);
