import { Icon } from "./Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
