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
  autoSize?: boolean | { minRows: number; maxRows: number };
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
    rows = 1,
    defaultValue = "",
    value: pValue,
    onChange: pOnChange,
    autoSize,
  } = props;

  const cls = classNames({
    "ant-input-textarea": true,
    "ant-input-textarea-show-count": showCount,
    [className as string]: !!className,
  });
  // const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(pValue || defaultValue);

  const autoSizeFunction = (rows: number) => {
    const rect = textareaRef.current?.getBoundingClientRect();
    const el = (window.el = textareaRef.current);
    console.log("rect", rect);

    // 计算 padding
    const styles = window.getComputedStyle(el);
    console.log("styles", styles);
    const {
      paddingBottom,
      paddingTop,
      borderTopWidth,
      borderBottomWidth,
      lineHeight,
    } = styles;

    const height =
      parseFloat(paddingBottom) +
      parseFloat(paddingTop) +
      parseFloat(borderTopWidth) +
      parseFloat(borderBottomWidth) +
      rows * parseFloat(lineHeight);

    el!.style.height = height + "px";
  };

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    const _value = e.target.value;
    if (autoSize) {
      const rows = e.target.value.split("\n").length;

      if (typeof autoSize === "boolean") {
        console.log("rows", rows);
        autoSizeFunction(rows);
      }

      if (typeof autoSize === "object") {
        const { minRows, maxRows } = autoSize;
        // 列举情况
        if (rows >= minRows && rows <= maxRows) {
          autoSizeFunction(rows);

          if (rows > maxRows) {
            textareaRef.current!.style.overflowY = "scroll";
          } else {
            textareaRef.current!.style.overflowY = "none";
          }
        }

        // rows < minRows 什么都不做

        // rows =< maxRows 和 rows >= minRows  则传递 rows

        // rows > maxRows 传递 maxRows 设置 overflow-scroll

        // 那么整体来说，是不是大于 等于 minRows 就传递 maxRows
      }
    }
    if (maxLength) {
      if (_value.length > maxLength) return;
    }

    // 非受控
    if (!("value" in props)) {
      setValue(_value);
    }

    pOnChange?.(e);
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  const _style: CSSProperties = { resize: autoSize ? "none" : "inline" };

  const textarea = (
    <textarea
      rows={typeof autoSize === "object" ? autoSize.minRows : rows}
      className="ant-input"
      ref={textareaRef}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      style={_style}
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
