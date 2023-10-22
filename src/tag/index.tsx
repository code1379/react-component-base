import classNames from "classnames";

import "./index.css";
import Icon from "../icon";
import { useState } from "react";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  closable?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose?: Function;
}

const Tag = (props: TagProps) => {
  const { color, closable = false, style, children, onClose, ...other } = props;

  const cls = classNames({
    "ant-tag": true,
    [`ant-tag-${color}`]: !color?.startsWith("#"),
  });

  const _style: React.CSSProperties = { ...style };

  if (color?.startsWith("#")) {
    _style.backgroundColor = color;
  }

  // state
  const [visible, setVisible] = useState(true);

  const _onClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <span className={cls} style={_style} {...other}>
      {children}
      {closable && (
        <Icon
          type="close"
          className="ant-tag-close-icon"
          size={10}
          // style={{ verticalAlign: "text-top" }}
          onClick={_onClose}
        />
      )}
    </span>
  );
};

export default Tag;
