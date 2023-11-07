import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./index.tsx";
const { RadioGroup } = Radio;
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/RadioGroup",
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Wrapper: Story = {
  render: () => {
    return (
      <RadioGroup value={3}>
        <Radio value={1} key={1}>
          1
        </Radio>
        <Radio value={2} key={2}>
          2
        </Radio>
        <Radio value={3} key={3}>
          3
        </Radio>
      </RadioGroup>
    );
  },
};
