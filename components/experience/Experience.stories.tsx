import { Experience } from "./Experience";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Experience",
    component: Experience,
} as ComponentMeta<typeof Experience>;

const Template: ComponentStory<typeof Experience> = (args) => (
    <div
        style={{
            width: "90vw",
            height: "90vh",
            minWidth: "40rem",
            backgroundColor: "#FAFAFA",
        }}
    >
        <Experience {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    bullets: ["testing", "data"],
    company: "Test Company",
    location: "Remote",
    date: "2021-2022",
    tools: ["css", "go"],
    technologies: ["html", "react", "vue"],
};
