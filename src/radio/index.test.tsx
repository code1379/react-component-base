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
  it("support click", () => {
    const onClick = jest.fn();
    render(
      <Radio onClick={onClick}>
        click
      </Radio>
    );
    const btnElem = screen.getByText("click");
    fireEvent.click(btnElem);
    expect(onClick).toBeCalled();
  });
});
