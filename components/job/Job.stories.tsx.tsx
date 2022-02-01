import { JobCard } from "./Job";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "JobCard",
    component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
    <JobCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    bullets: ["testing", "data"],
    company: "Test Company",
    location: "Remote",
    date: "2021-2022",
    tools: ["css", "go"],
    technologies: ["html", "react", "vue"],
    className: "w-1/2 min-w-fit",
};
