import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index.tsx";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Input",
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = () => {
  return <Input value="abc" placeholder="basic usage" />;
};

export const Control = () => {
  const [value, setValue] = useState("111");

  const onChange = (e) => {
    console.log("!!!");
    console.log("e.target.value", e.target.value);
    setValue(e.target.value);
  };
  return <Input value={value} placeholder="basic usage" onChange={onChange} />;
};
