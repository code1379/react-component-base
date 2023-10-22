import classNames from "classnames";

import "./index.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "dashed" | "link" | "text";
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { type, className, style, children, onClick, onBlur, ...other } = props;

  const cls = classNames({
    "ant-btn": true,
    [`ant-btn-${type}`]: !!type,
    [className as string]: !!className,
  });

  return (
    <button
      className={cls}
      style={style}
      onClick={onClick}
      onBlur={onBlur}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
