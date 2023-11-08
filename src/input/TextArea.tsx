import classNames from "classnames";

import "./index.css";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  // ----
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  prefix?: string;
}

const TextArea = (props: TextAreaProps) => {
  const {
    className,
    placeholder,
    maxLength,
    showCount,
    rows = 2,
    defaultValue = "",
    value: pValue,
    onChange: pOnChange,
  } = props;

  const cls = classNames({
    "ant-input-textarea": true,
    "ant-input-textarea-show-count": showCount,
    [className as string]: !!className,
  });
  // const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(pValue || defaultValue);

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    const _value = e.target.value;

    if (maxLength) {
      if (_value.length > maxLength) return;
    }

    // 非受控
    if (!("value" in props)) {
      setValue(_value);
    }

    pOnChange?.(e);
  };

  useEffect(() => {
    if ("value" in props) {
      setValue(pValue!);
    }
  }, [pValue]);

  // useEffect(() => {
  //   if (showCount && maxLength) {
  //     wrapperRef.current?.setAttribute(
  //       "data-count",
  //       `${value.length} / ${maxLength}`
  //     );
  //   }
  // }, [value]);

  // return (
  //   <div className={cls} ref={wrapperRef}>
  //     <textarea
  //       rows={rows}
  //       className="ant-input"
  //       value={value}
  //       placeholder={placeholder}
  //       onChange={handleChange}
  //     ></textarea>
  //   </div>
  // );

  const textarea = (
    <textarea
      rows={rows}
      className="ant-input"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    ></textarea>
  );

  if (showCount) {
    return (
      <div className={cls} data-count={`${value.length} / ${maxLength}`}>
        {textarea}
      </div>
    );
  }

  return textarea;
};

export default TextArea;
