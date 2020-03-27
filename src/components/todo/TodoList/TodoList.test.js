import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoList from "./TodoList";

const defaultProps = {
  onEditTodo: jest.fn(),
  onCreateTodo: jest.fn(),
  onToggleTodoCheck: jest.fn(),
  onRemove: jest.fn(),
  onEdit: jest.fn()
};

const mockTodos = [
  { id: "1234", description: "Walk dog", isCompleted: false },
  { id: "5678", description: "Fold laundry", isCompleted: true }
];

describe("TodoList unit test", () => {
  it("lists existing todos while not playing recording or recording ", () => {
    render(
      <TodoList
        {...defaultProps}
        todos={mockTodos}
        isPlayingRecording={false}
        isRecording={false}
      />
    );
  });
  it("Plays recording of todo actions", () => {
    render(
      <TodoList
        {...defaultProps}
        todos={mockTodos}
        isPlayingRecording
        isRecording={false}
      />
    );
  });
  it("Recording current todo actions", () => {
    render(
      <TodoList
        {...defaultProps}
        todos={mockTodos}
        isPlayingRecording={false}
        isRecording
      />
    );
  });
  it("Display empty view", () => {
    render(
      <TodoList
        {...defaultProps}
        todos={[]}
        isPlayingRecording={false}
        isRecording={false}
      />
    );
  });
});
