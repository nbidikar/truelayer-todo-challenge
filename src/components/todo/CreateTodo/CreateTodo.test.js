import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CreateTodo from "./CreateTodo";

describe("unit test CreateTodo", () => {
  it("update input with non-empty value and press button to create todo", () => {
    const onCreateTodo = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <CreateTodo onCreateTodo={onCreateTodo} />
    );

    fireEvent.change(getByPlaceholderText("Create a new todo"), {
      target: { value: "New Todo" }
    });

    fireEvent.click(getByTestId("create-todo-button"));

    expect(onCreateTodo).toHaveBeenCalled();
  });
  it("update input with empty value and try to create todo", () => {
    const onCreateTodo = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <CreateTodo onCreateTodo={onCreateTodo} />
    );

    fireEvent.change(getByPlaceholderText("Create a new todo"), {
      target: { value: "" }
    });

    fireEvent.click(getByTestId("create-todo-button"));

    expect(onCreateTodo).toHaveBeenCalledTimes(0);
  });
  it("presses Enter to create todo", () => {
    const onCreateTodo = jest.fn();

    const { getByPlaceholderText } = render(
      <CreateTodo onCreateTodo={onCreateTodo} />
    );

    const input = getByPlaceholderText("Create a new todo");

    fireEvent.change(input, {
      target: { value: "New Todo" }
    });

    fireEvent.keyPress(input, {
      key: "Enter",
      code: 13,
      charCode: 13
    });

    expect(onCreateTodo).toHaveBeenCalled();
  });
  it("press any key and do nothing", () => {
    const onCreateTodo = jest.fn();

    const { getByPlaceholderText } = render(
      <CreateTodo onCreateTodo={jest.fn()} />
    );

    fireEvent.keyPress(getByPlaceholderText("Create a new todo"), {
      key: "Escape",
      code: 68,
      charCode: 68
    });

    expect(onCreateTodo).toHaveBeenCalledTimes(0);
  });
});
