import { render, screen, fireEvent } from "@testing-library/react";
import { vi as jest } from "vitest";
import "@testing-library/jest-dom";
import Radio from "./index.tsx";

describe("Radio", () => {
  it("base Radio", () => {
    render(<Radio>click</Radio>);
    const btnElem = screen.getByText("click");
    expect(btnElem).toBeInTheDocument();
  });
  it("support onChange", () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange}>click</Radio>);
    const btnElem = screen.getByText("click");
    fireEvent.click(btnElem);
    expect(onChange).toBeCalled();
  });

  it("support under control", () => {
    const onChange = jest.fn();
    render(
      <Radio checked onChange={onChange}>
        click
      </Radio>
    );
    const btnElem = screen.getByText("click");
    fireEvent.click(btnElem);
    expect(onChange).toBeCalledTimes(0);
  });
});
