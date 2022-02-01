import { Job } from "./Job";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Job",
    component: Job,
} as ComponentMeta<typeof Job>;

const Template: ComponentStory<typeof Job> = (args) => <Job {...args} />;

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
