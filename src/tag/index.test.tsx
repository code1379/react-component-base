import { render, screen, fireEvent } from "@testing-library/react";
import { vi as jest } from "vitest";
import "@testing-library/jest-dom";
import Tag from "./index";

describe("Tag", () => {
  // afterEach(cleanup);
  it("base tag", () => {
    render(<Tag>click</Tag>);
    const tagElem = screen.getByText("click");
    expect(tagElem).toBeInTheDocument();
  });
  it("support close", () => {
    const onClose = jest.fn();
    render(
      <Tag color="red" closable onClose={onClose}>
        click
      </Tag>
    );
    const tagElem = screen.getByText("click");
    fireEvent.click(tagElem);
    expect(onClose).toBeCalled();
  });
});
