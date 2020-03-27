import { TodoActions } from "./todo";
import * as types from "./types";

describe("todo action creators unit tests", () => {
  it("dispatches createTodo", () => {
    const expectedAction = {
      type: types.TODO.CREATE_TODO,
      payload: "New todo"
    };

    expect(TodoActions.createTodo("New todo")).toEqual(expectedAction);
  });
  it("dispatches removeTodo", () => {
    const expectedAction = { type: types.TODO.REMOVE_TODO, payload: "id" };

    expect(TodoActions.removeTodo("id")).toEqual(expectedAction);
  });
  describe("dispatches updateTodo", () => {
    it("updates todo", () => {
      const expectedAction = {
        type: types.TODO.UPDATE_TODO,
        payload: { id: 123, updatedDescription: "Update todo" }
      };

      expect(TodoActions.updateTodo(123, "Update todo")).toEqual(
        expectedAction
      );
    });
    it("removes todo due to empty description", () => {
      const expectedAction = {
        type: types.TODO.REMOVE_TODO,
        payload: 123
      };

      expect(TodoActions.updateTodo(123, "")).toEqual(expectedAction);
    });
  });
  it("dispatches toggleTodoCheck", () => {
    const expectedAction = { type: types.TODO.TOGGLE_COMPLETE, payload: "id" };

    expect(TodoActions.toggleTodoCheck("id")).toEqual(expectedAction);
  });
});
