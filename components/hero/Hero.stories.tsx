import { Hero } from "./Hero";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Hero",
    component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
    introduction: "Hello! My name is...",
    name: "Blake Bradford",
    summary: "...and I'm a full-stack developer from Kansas City.",
};
