import classNames from "classnames";

import "./index.css";
import { useEffect, useState } from "react";
import React from "react";
import CheckboxContext from "./context";
export interface CheckboxGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  value?: string[];
  defaultValue?: string[];
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  name?: string;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    className,
    disabled = false,
    children,
    onChange,
    value = [],
    defaultValue = [],
    // ...other
  } = props;
  console.log("props", props);
  const cls = classNames({
    "ant-checkbox-group": true,
    [className as string]: !!className,
  });

  useEffect(() => {
    if ("value" in props) {
      setCheckList(props.value!);
    }
  }, [props.value]);

  const [checkList, setCheckList] = useState(value || defaultValue);

  const handleChildClick = (e) => {
    console.log("handleChildClick", e);
    // e.target 传递过来的是字符串
    const val = e.target.value;
    // 判断 checkList 中是否包含 val
    // 有   删除
    // 没有 添加
    console.log("val", val);
    const _checkList = [...checkList];
    if (!_checkList.includes(val)) {
      _checkList.push(val);
    } else {
      const index = _checkList.indexOf(val);
      _checkList.splice(index, 1);
    }
    setCheckList(_checkList);
    // onChange?.(_checkList);
  };

  // 和子组件通信
  // const newChildren = React.Children.map(children, (child: any) => {
  //   console.log("checkList", checkList);
  //   console.log("child.props.value", child.props.value);

  //   const checked = checkList.includes(child.props.value);
  //   return React.cloneElement(child, {
  //     checked,
  //     disabled: props.disabled,
  //     onChange: handleChildClick,
  //     key: child.props.key,
  //   });
  // });

  return (
    <span className={cls}>
      <CheckboxContext.Provider
        value={{
          value: checkList,
          onChange: handleChildClick,
          disabled,
          // disabled: props.disabled,
        }}
      >
        <span>{children}</span>
      </CheckboxContext.Provider>
    </span>
  );
};

export default CheckboxGroup;
