import classNames from "classnames";

import "./index.css";
import { useContext, useEffect, useRef, useState } from "react";
import CheckboxContext from "./context";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  defaultChecked?: boolean;
  checked?: boolean;
  // onChange?: (e) => void; // 继承自 HTMLInputElement 后就不需要添加这个
  disabled?: boolean;
  value: string;
}

// 非受控，不受外部控制
// const Checkbox = (props: CheckboxProps) => {
//   const { className, style, children, ...other } = props;

//   //  拿到 input
//   const inputRef = useRef(null);
//   const [checked, setChecked] = useState(false);
//   // 外层 class
//   const wrapperCls = classNames({
//     "ant-checkbox-wrapper": true,
//   });
//   // 内部 class
//   const cls = classNames({
//     "ant-checkbox": true,
//     "ant-checkbox-checked": checked,
//     [className as string]: !!className,
//   });

//   const onChange = (e) => {
//     const inputTarget = inputRef.current;
//     console.log("click", inputRef.current);
//     setChecked(!inputTarget.checked);
//   };

//   return (
//     <label className={wrapperCls} onClick={onChange}>
//       <span className={cls}>
//         {/* 我们要拿到这个 使用 useRef */}
//         <input
//           ref={inputRef}
//           checked={checked}
//           className="ant-checkbox-input"
//           type="checkbox"
//         />
//         <span className="ant-checkbox-inner"></span>
//       </span>
//       <span>{children}</span>
//     </label>
//   );
// };

const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    style,
    children,
    defaultChecked = false,
    onChange: pOnChange,
    disabled = false,
    value,
    ...other
  } = props;

  const {
    onChange: cOnChange,
    disabled: cDisabled,
    value: cValue,
  } = useContext(CheckboxContext);

  //  拿到 input
  const inputRef = useRef(null);

  const [checked, setChecked] = useState(defaultChecked);
  // hooks 第一次就会执行，即使 defaultChecked 和 props.checked 值不同也会被改变
  // 监听 props.checked 改变 checked
  useEffect(() => {
    if ("checked" in props) {
      setChecked(!!props.checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked]);

  useEffect(() => {
    if (cValue && "value" in props) {
      if (cValue.includes(value)) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cValue]);

  // 外层 class
  const wrapperCls = classNames({
    "ant-checkbox-wrapper": true,
    "ant-checkbox-wrapper-disabled": disabled,
  });
  // 内部 class
  const cls = classNames({
    "ant-checkbox": true,
    "ant-checkbox-checked": checked,
    "ant-checkbox-disabled": disabled,
    [className as string]: !!className,
  });

  const handleClick = (e) => {
    // 必须加 preventDefault 否则点击 children 的地方 不能触发
    e.preventDefault();
    if (disabled || cDisabled) {
      return;
    }
    // e.preventDefault();
    if (!("checked" in props)) {
      setChecked(!checked);
    }

    // 即使是非受控也可以传递 onChange 事件
    if (typeof pOnChange === "function") {
      e.target = inputRef.current;
      e.target.checked = !checked;
      pOnChange(e);
    }

    if (typeof cOnChange === "function") {
      e.target = inputRef.current;
      e.target.checked = !checked;
      cOnChange(e);
    }
  };

  return (
    <label className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        {/* 我们要拿到这个 使用 useRef */}
        <input
          ref={inputRef}
          checked={checked}
          value={value}
          className="ant-checkbox-input"
          onChange={handleClick}
          type="checkbox"
        />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
