import { ContactForm } from "./ContactForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Contact Form",
    component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

export const Empty: ComponentStory<typeof ContactForm> = () => <ContactForm />;
