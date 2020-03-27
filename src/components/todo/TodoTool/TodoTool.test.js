import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoTool from "./TodoTool";

import rootReducer from "../../../reducers";

const initialState = {};

const store = createStore(rootReducer, initialState);

const mockProps = {
  todos: [
    { id: "1234", description: "Walk dog", isCompleted: false },
    { id: "5678", description: "Fold laundry", isCompleted: true }
  ],
  toggleTodoCheck: jest.fn(),
  removeTodo: jest.fn(),
  updateTodo: jest.fn(),
  createTodo: jest.fn(),
  isPlayingRecording: false,
  isRecording: false
};

describe("unit test TodoTool", () => {
  it("renders", () => {
    render(
      <Provider store={store}>
        <TodoTool {...mockProps} />
      </Provider>
    );
  });
});
