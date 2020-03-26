import * as types from "./types";

function createTodo(todoDescription) {
  return {
    type: types.TODO.CREATE_TODO,
    payload: todoDescription
  };
}

function removeTodo(id) {
  return {
    type: types.TODO.REMOVE_TODO,
    payload: id
  };
}

function updateTodo(id, updatedDescription) {
  if (updatedDescription !== "") {
    return {
      type: types.TODO.UPDATE_TODO,
      payload: {
        id,
        updatedDescription
      }
    };
  } else {
    return {
      type: types.TODO.REMOVE_TODO,
      payload: id
    };
  }
}

function toggleTodoCheck(id) {
  return {
    type: types.TODO.TOGGLE_COMPLETE,
    payload: id
  };
}

export const TodoActions = {
  createTodo,
  removeTodo,
  updateTodo,
  toggleTodoCheck
};
