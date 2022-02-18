import { SummaryCard } from "./SummaryCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "SummaryCard",
    component: SummaryCard,
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = (args) => (
    <SummaryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
