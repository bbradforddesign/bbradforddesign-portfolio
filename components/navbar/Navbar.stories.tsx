import { Navbar } from "./Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
    <div
        style={{
            width: "90vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        }}
    >
        <Navbar {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    links: [
        { display: "About", url: "#" },
        { display: "Experience", url: "#" },
        { display: "Projects", url: "#" },
        { display: "Contact", url: "#" },
    ],
};
