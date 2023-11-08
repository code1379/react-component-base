import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";

const { Group } = Checkbox;
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/CheckboxGroup",
  component: Group,
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
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Wrapper: Story = {
  render: () => {
    return (
      <Group value={["2"]}>
        <Checkbox value="1">1</Checkbox>
        <Checkbox value="2">2</Checkbox>
        <Checkbox value="3">3</Checkbox>
      </Group>
    );
  },
};

export const NestedChild = () => {
  return (
    <>
      <Group value={["2"]}>
        <span>
          <Checkbox value="1">1</Checkbox>
        </span>
        <Checkbox value="2">2</Checkbox>
        <Checkbox value="3">3</Checkbox>
      </Group>
    </>
  );
};
