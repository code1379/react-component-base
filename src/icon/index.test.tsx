import { render, fireEvent } from "@testing-library/react";
import { vi as jest } from "vitest";
import "@testing-library/jest-dom";
import Icon from "./index";

describe("Icon", () => {
  it("base icon", () => {
    const { container } = render(<Icon type="download" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("custom classname", () => {
    const { container } = render(<Icon type="download" className="custom" />);
    expect(container.querySelector(".custom")).toBeInTheDocument();
  });

  it("support click", () => {
    const onClick = jest.fn();
    const { container } = render(
      <Icon className="custom" type="download" onClick={onClick} />
    );
    const svgElem = container.querySelector(".custom");
    fireEvent.click(svgElem!);
    expect(onClick).toBeCalled();
  });
});
