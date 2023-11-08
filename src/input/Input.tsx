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
  maxCount?: number;
  showCount?: boolean;
  prefix?: string;
}

const Input = (props: InputProps) => {
  const {
    className,
    onChange,
    placeholder,
    style,
    children,
    defaultValue = "",
    maxCount,
    showCount = false,
    prefix,
    ...other
  } = props;

  const cls = classNames({
    "ant-input": true,
    [className as string]: !!className,
  });

  const [value, setValue] = useState(props.value || defaultValue);

  // showCount

  const handleInputChange = (e) => {
    // if ("value" in props) return;
    // const _value = e.target.value;
    // setValue(_value);
    // if (typeof onChange === "function") {
    //   onChange(_value);
    // }

    const _value = e.target.value;
    if ("maxCount" in props) {
      if (_value.length > maxCount) return;
    }
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

  const input = (
    <input
      className={cls}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );

  if (props.maxCount || prefix) {
    return (
      <span className="ant-input-affix-wrapper">
        {prefix ? <span className="ant-input-prefix">{prefix}</span> : null}
        <input
          className={cls}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        <span className="ant-input-suffix">
          <span className="ant-input-show-count-suffix">
            {value.length} / {maxCount}
          </span>
        </span>
      </span>
    );
  }
  return input;
};

export default Input;
