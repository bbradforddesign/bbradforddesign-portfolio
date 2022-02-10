import { ProjectCard } from "./ProjectCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "ProjectCard",
    component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
    <ProjectCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    bullets: ["testing", "data"],
    title: "Test Project",
    tools: ["css", "go"],
    technologies: ["html", "react", "vue"],
};
