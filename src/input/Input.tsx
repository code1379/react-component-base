import classNames from "classnames";

import "./index.css";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Input = (props: InputProps) => {
  const { className, style, children, ...other } = props;

  const cls = classNames({
    "ant-input": true,
    [className as string]: !!className,
  });

  return (
    <div className={cls} style={style} {...other}>
      {children}
    </div>
  );
};

export default Input;
