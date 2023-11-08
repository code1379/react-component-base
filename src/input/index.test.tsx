import { render, screen, fireEvent } from "@testing-library/react";
import { vi as jest } from "vitest";
import "@testing-library/jest-dom";
import Input from "./index.tsx";

describe("Input", () => {
  it("base Input", () => {
    render(<Input>click</Input>);
    const btnElem = screen.getByText("click");
    expect(btnElem).toBeInTheDocument();
  });
  it("support click", () => {
    const onClick = jest.fn();
    render(
      <Input onClick={onClick}>
        click
      </Input>
    );
    const btnElem = screen.getByText("click");
    fireEvent.click(btnElem);
    expect(onClick).toBeCalled();
  });
});
