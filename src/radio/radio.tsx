import classNames from "classnames";

import "./index.css";
import { useRef, useState } from "react";

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  // value?: boolean;
}

const Radio = (props: RadioProps) => {
  const {
    className,
    defaultChecked = false,
    disabled = false,
    children,
    onChange,
    // ...other
  } = props;

  const wrapperCls = classNames({
    "ant-radio-wrapper": true,
    "ant-radio-wrapper-disabled": disabled,
  });

  const [checked, setChecked] = useState(defaultChecked);

  const cls = classNames({
    "ant-radio": true,
    "ant-radio-checked": checked,
    "ant-radio-disabled": disabled,
    [className as string]: !!className,
  });

  const inputEl = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault();
    setChecked(!checked);

    if (typeof onChange === "function") {
      e.target = inputEl.current;
      onChange(e);
    }
  };

  return (
    <label className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input ref={inputEl} type="radio" className="ant-radio-input" />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Radio;
