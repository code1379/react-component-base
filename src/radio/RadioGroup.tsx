import classNames from "classnames";

import "./index.css";
import { useEffect, useRef, useState } from "react";
import React from "react";

export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    className,
    // disabled = false,
    children,
    onChange,
    // ...other
  } = props;

  const cls = classNames({
    "ant-radio-group": true,
    [className as string]: !!className,
  });

  const [value, setValue] = useState(props.defaultValue || props.value);

  const handleChildClick = (e) => {
    // e.target 传递过来的是字符串
    const val = e.target.value;
    setValue(val);
  };

  // 和子组件通信
  const newChildren = React.Children.map(children, (child: any) => {
    const checked = child.props.value == value;
    return React.cloneElement(child, {
      checked,
      disabled: props.disabled,
      onChange: handleChildClick,
      key: child.props.key,
    });
  });

  return (
    <span className={cls}>
      <span>{newChildren}</span>
    </span>
  );
};

export default RadioGroup;
