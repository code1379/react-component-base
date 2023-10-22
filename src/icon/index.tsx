import React from "react";
import classNames from "classnames";

import "./index.css";

interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  type: "download";
  className?: string;
  size?: number;
  // onClick?: React.MouseEventHandler<SVGSVGElement>;
  // onBlur?: React.FocusEventHandler<SVGSVGElement>;
}

const Icon = (props: IconProps) => {
  const { type, className, size = 32, ...other } = props;
  const cls = classNames({
    "ant-icon": true,
    [className as string]: !!className,
  });

  const style: React.CSSProperties = {};
  if (size) {
    style.width = size;
    style.height = size;
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
  };

  const keys = Object.keys(svgMap);

  if (keys.includes(type)) {
    const svg = svgMap[type];

    return React.cloneElement(svg, {
      style,
      className: cls,
      ...other,
    });
  }
  return <i />;
};

export default Icon;
