import { Footer } from "./Footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Footer",
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
