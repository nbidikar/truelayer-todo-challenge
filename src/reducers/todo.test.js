import * as types from "../actions/types";
import { REHYDRATE } from "redux-persist/lib/constants";
import todoReducer from "./todo";

describe("todoReducer unit test", () => {
  it("should return initialState", () => {
    expect(todoReducer(undefined, {})).toEqual({
      todos: []
    });
  });
  describe("should handle REHYDRATE", () => {
    it("should rehydrated with persisted state", () => {
      const rehydrateAction = {
        type: REHYDRATE,
        payload: {
          todos: ["Persisted todos"]
        }
      };

      const initialState = { todos: [] };

      const updatedState = todoReducer(initialState, rehydrateAction);

      expect(updatedState.todos.length).toBe(1);
    });
    it("should keep initial state due to no persisted state", () => {
      const rehydrateAction = {
        type: REHYDRATE,
        payload: null
      };

      const initialState = { todos: [] };

      const updatedState = todoReducer(initialState, rehydrateAction);

      expect(updatedState).toEqual(initialState);
    });
  });

  it("should handle CREATE_TODO", () => {
    const createTodoAction = {
      type: types.TODO.CREATE_TODO,
      payload: "New todo"
    };

    const initialState = { todos: [{ description: "Old todo" }] };

    const updatedState = todoReducer(initialState, createTodoAction);

    expect(updatedState.todos.length).toBe(2);
  });
  it("should handle REMOVE_TODO", () => {
    const removeTodoAction = {
      type: types.TODO.REMOVE_TODO,
      payload: "123"
    };

    const initialState = {
      todos: [
        { id: "123", description: "To remove" },
        { id: "456", description: "To keep" }
      ]
    };

    const updatedState = todoReducer(initialState, removeTodoAction);

    expect(updatedState.todos.findIndex(todo => todo.id === "123")).toBe(-1);
  });
  it("should handle UPDATE_TODO", () => {
    const updateTodoAction = {
      type: types.TODO.UPDATE_TODO,
      payload: { id: "123", updatedDescription: "Walk the dog in 20 min" }
    };

    const initialState = {
      todos: [{ id: "123", description: "Walk dog" }]
    };

    const updatedState = todoReducer(initialState, updateTodoAction);

    expect(updatedState.todos.find(todo => todo.id === "123").description).toBe(
      "Walk the dog in 20 min"
    );
  });
  it("should handle TOGGLE_COMPLETE", () => {
    const toggleTodoAction = {
      type: types.TODO.TOGGLE_COMPLETE,
      payload: "123"
    };

    const initialState = {
      todos: [{ id: "123", isCompleted: false }]
    };

    const updatedState = todoReducer(initialState, toggleTodoAction);

    expect(
      updatedState.todos.find(todo => todo.id === "123").isCompleted
    ).toBeTruthy();
  });
});
