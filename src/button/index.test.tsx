import { render, screen, fireEvent } from "@testing-library/react";
import { vi as jest } from "vitest";
import "@testing-library/jest-dom";
import Button from "./index";

describe("Button", () => {
  // afterEach(cleanup);
  it("base button", () => {
    render(<Button>click</Button>);
    const btnElem = screen.getByText("click");
    expect(btnElem).toBeInTheDocument();
  });
  it("primary button", () => {
    render(<Button type="primary">click</Button>);
    const btnElem = screen.getByText("click");
    expect(btnElem).toBeInTheDocument();
  });
  it("support click", () => {
    const onClick = jest.fn();
    render(
      <Button type="primary" onClick={onClick}>
        click
      </Button>
    );
    const btnElem = screen.getByText("click");
    fireEvent.click(btnElem);
    expect(onClick).toBeCalled();
  });
  it("support blur", () => {
    const onBlur = jest.fn();
    render(
      <Button type="primary" onBlur={onBlur}>
        click
      </Button>
    );
    const btnElem = screen.getByText("click");
    fireEvent.blur(btnElem);
    expect(onBlur).toBeCalled();
  });
  it("support focus", () => {
    const onFocus = jest.fn();
    render(
      <Button type="primary" onFocus={onFocus}>
        click
      </Button>
    );
    const btnElem = screen.getByText("click");
    fireEvent.focus(btnElem);
    expect(onFocus).toBeCalled();
  });
});
// test("base button", () => {
//   render(<Button>click</Button>);
//   const btnElem = screen.getByText("click");
//   expect(btnElem).toBeInTheDocument();
// });
