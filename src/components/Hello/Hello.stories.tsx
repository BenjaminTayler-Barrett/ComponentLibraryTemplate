import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hello from "./Hello";

export default {
    title: "Components/Hello",
    component: Hello,
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const HelloStory = Template.bind({});
HelloStory.args = {
    text: "Hello World",
};
