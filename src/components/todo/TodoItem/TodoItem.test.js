import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoItem from "./TodoItem";

const mockProps = {
  todo: { id: "1234", description: "Walk dog", isCompleted: false },
  onToggleTodoCheck: jest.fn(),
  onRemoveTodo: jest.fn(),
  onEditTodo: jest.fn()
};

describe("unit test TodoItem", () => {
  it("renders and fires all todo actions", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <TodoItem {...mockProps} />
    );

    fireEvent.click(getByTestId("check-circle"));

    expect(mockProps.onToggleTodoCheck).toHaveBeenCalled();

    fireEvent.click(getByTestId("remove-todo-button"));

    expect(mockProps.onRemoveTodo).toHaveBeenCalled();

    const input = getByPlaceholderText("Remove Todo?");

    fireEvent.change(input, {
      target: { value: "Walk the dog for 20 min" }
    });

    fireEvent.keyPress(input, {
      key: "Enter",
      code: 13,
      charCode: 13
    });

    expect(mockProps.onEditTodo).toHaveBeenCalledWith(
      "1234",
      "Walk the dog for 20 min"
    );
  });
});
