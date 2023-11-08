import classNames from "classnames";

import "./index.css";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Input = (props: InputProps) => {
  const {
    className,
    onChange,
    placeholder,
    style,
    children,
    defaultValue = "",
    ...other
  } = props;

  const cls = classNames({
    "ant-input": true,
    [className as string]: !!className,
  });

  const [value, setValue] = useState(props.value || defaultValue);

  const handleInputChange = (e) => {
    // if ("value" in props) return;
    // const _value = e.target.value;
    // setValue(_value);
    // if (typeof onChange === "function") {
    //   onChange(_value);
    // }

    const _value = e.target.value;
    if (!("value" in props)) {
      setValue(_value);
    }
    console.log("????");
    onChange?.(e);
  };

  useEffect(() => {
    if ("value" in props) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <input
      className={cls}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default Input;
