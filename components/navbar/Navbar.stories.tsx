import { Navbar } from "./Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    links: [
        { display: "About", url: "#" },
        { display: "Experience", url: "#" },
        { display: "Projects", url: "#" },
        { display: "Contact", url: "#" },
    ],
};
