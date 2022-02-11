import { Navbar } from "./Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
    <div>
        <Navbar {...args} />
        <div className="w-full h-screen bg-black" />
        <div className="w-full h-screen bg-white" />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    homepageLinks: ["About", "Experience", "Projects", "Contact"],
};
