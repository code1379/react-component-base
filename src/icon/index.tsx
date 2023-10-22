import React from "react";
import classNames from "classnames";

import "./index.css";

interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  type: "download" | "close";
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  // onClick?: React.MouseEventHandler<SVGSVGElement>;
  // onBlur?: React.FocusEventHandler<SVGSVGElement>;
}

const Icon = (props: IconProps) => {
  const { type, className, size = 32, style, ...other } = props;
  const cls = classNames({
    "ant-icon": true,
    [className as string]: !!className,
  });

  const _style: React.CSSProperties = { ...style };
  if (size) {
    _style.width = size;
    _style.height = size;
  }

  const svgMap = {
    download: (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1742"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
      >
        <path
          d="M722.773333 381.44a64 64 0 0 1 90.453334 90.453333l-252.970667 253.013334a68.266667 68.266667 0 0 1-96.512 0l-253.013333-253.013334a64 64 0 0 1 90.538666-90.453333L512 592.128l210.773333-210.773333z"
          fill="#111111"
          p-id="1743"
        ></path>
      </svg>
    ),
    close: (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1882"
        width="200"
        height="200"
      >
        <path
          d="M0 0h1024v1024H0z"
          fill="#FF0033"
          fill-opacity="0"
          p-id="1883"
        ></path>
        <path
          d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z"
          fill="#111111"
          p-id="1884"
        ></path>
      </svg>
    ),
  };

  const keys = Object.keys(svgMap);

  if (keys.includes(type)) {
    const svg = svgMap[type];

    return React.cloneElement(svg, {
      style: _style,
      className: cls,
      ...other,
    });
  }
  return <i />;
};

export default Icon;
