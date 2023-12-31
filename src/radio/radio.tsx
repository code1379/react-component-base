/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";

import "./index.css";
import { useEffect, useRef, useState } from "react";

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
  key?: any;
}

const Radio = (props: RadioProps) => {
  const {
    className,
    defaultChecked = false,
    disabled = false,
    children,
    onChange,
    value,
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
    // disabled 状态下不可以点击
    if (disabled) return;
    e.preventDefault();
    // 选中状态下，不能移除
    if (checked) return;

    // 受控和非受控的理解 => 组件值在内部管理，受控。组件不在内部管理，非受控。

    // => 在外部管理，非受控 "checked" in props
    // => 这里是受控的
    if (!("checked" in props)) {
      setChecked(!checked);
    }

    // 即使是非受控组件，也可以调用 onChange 方法
    if (typeof onChange === "function") {
      e.target = inputEl.current;
      onChange(e);
    }
  };

  // 非受控时，受外部控制
  useEffect(() => {
    if ("checked" in props && props.checked !== checked) {
      setChecked(props.checked!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked]);

  return (
    <label className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input
          ref={inputEl}
          value={value}
          type="radio"
          className="ant-radio-input"
        />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Radio;
