import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: "content",
    onChange: (e) => {
      console.log(e);
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "content",
    disabled: true,
  },
};

export const Unchecked: Story = {
  args: {
    children: "Unchecked",
    checked: false,
  },
};
