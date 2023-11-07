import { render, screen, fireEvent } from "@testing-library/react";
import { vi as jest } from "vitest";
import "@testing-library/jest-dom";
import Checkbox from "./index.tsx";

describe("Checkbox", () => {
  it("base Checkbox", () => {
    render(<Checkbox>click</Checkbox>);
    const btnElem = screen.getByText("click");
    expect(btnElem).toBeInTheDocument();
  });
  it("support click", () => {
    const onClick = jest.fn();
    render(
      <Checkbox onClick={onClick}>
        click
      </Checkbox>
    );
    const btnElem = screen.getByText("click");
    fireEvent.click(btnElem);
    expect(onClick).toBeCalled();
  });
});
