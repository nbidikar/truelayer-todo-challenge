import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoInput from "./TodoInput";

describe("unit test TodoItem", () => {
  it("updates todo and submits on pressing Enter", () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText } = render(
      <TodoInput onSubmit={onSubmit} isCompleted value="Walk the dog" />
    );

    const input = getByPlaceholderText("Remove Todo?");

    fireEvent.change(input, {
      target: { value: "Walk the dog for 20 min" }
    });

    fireEvent.keyPress(input, {
      key: "Enter",
      code: 13,
      charCode: 13
    });

    expect(onSubmit).toHaveBeenCalled();
  });
  it("try to update todo with same description", () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText } = render(
      <TodoInput onSubmit={onSubmit} isCompleted value="Walk the dog" />
    );

    const input = getByPlaceholderText("Remove Todo?");

    fireEvent.change(input, {
      target: { value: "Walk the dog" }
    });

    fireEvent.keyPress(input, {
      key: "Enter",
      code: 13,
      charCode: 13
    });

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it("component updates to new todo description", () => {
    const { rerender, getByPlaceholderText } = render(
      <TodoInput onSubmit={jest.fn()} isCompleted value="Walk the dog" />
    );

    const input = getByPlaceholderText("Remove Todo?");

    expect(input.value).toBe("Walk the dog");

    rerender(
      <TodoInput
        onSubmit={jest.fn()}
        isCompleted
        value="Walk the dog in 20 min"
      />
    );

    expect(input.value).toBe("Walk the dog in 20 min");
  });
  it("press any key and nothing happens", () => {
    const { getByPlaceholderText } = render(
      <TodoInput onSubmit={jest.fn()} isCompleted value="Walk the dog" />
    );

    fireEvent.keyPress(getByPlaceholderText("Remove Todo?"), {
      key: "Escape",
      code: 68,
      charCode: 68
    });
  });
  it("handle any click outside input to submit value", () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText } = render(
      <TodoInput onSubmit={onSubmit} isCompleted value="Walk the dog" />
    );

    fireEvent.change(getByPlaceholderText("Remove Todo?"), {
      target: { value: "Walk the dog in 20 min" }
    });

    fireEvent.click(document);

    expect(onSubmit).toHaveBeenCalled();
  });
});
