import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./index.tsx";
import Button from "../button/index.tsx";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: "content",
  },
};

export const UnderControl: Story = {
  args: {
    children: "content",
  },
};

// export const Disable: Story = {
//   args: {
//     disabled: true,
//     children: "content",
//   },
// };

export const Disable = () => {
  return (
    <>
      <Checkbox disabled>111</Checkbox>
    </>
  );
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
      setChecked(!checked);
    };
    const handleDisabled = () => {
      setDisabled(!disabled);
    };

    const onChange = (e) => {
      console.log("checked = ", e.target.checked);
      setChecked(e.target.checked);
    };

    return (
      <>
        <h1>受控的Checkbox</h1>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          点我
        </Checkbox>
        <div>
          <Button onClick={handleClick}>点我改变 checked 值</Button>
          <Button onClick={handleDisabled}>点我改变 disabled 值</Button>
        </div>
      </>
    );
  },
};
