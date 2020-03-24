import * as types from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    { id: "123", description: "Walk the dog", isCompleted: true },
    { id: "456", description: "Do taxes", isCompleted: false },
    { id: "789", description: "Cut hair", isCompleted: true },
    { id: "101112", description: "Clean dishes", isCompleted: false },
    { id: "131415", description: "Tidy desk", isCompleted: false },
    { id: "161718", description: "Take out trash", isCompleted: false }
  ]
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO.CREATE_TODO: {
      const newTodo = {
        id: uuid(),
        description: action.payload,
        isCompleted: false
      };

      const todos = [...state.todos];

      todos.unshift(newTodo);

      return {
        ...state,
        todos
      };
    }
    case types.TODO.REMOVE_TODO: {
      const id = action.payload;

      const todos = state.todos.filter(todo => todo.id !== id);

      return {
        ...state,
        todos
      };
    }
    case types.TODO.UPDATE_TODO: {
      const { id, updatedDescription } = action.payload;

      const todos = [...state.todos];

      const index = todos.findIndex(todo => todo.id === id);

      todos[index].description = updatedDescription;

      return {
        ...state,
        todos
      };
    }
    case types.TODO.TOGGLE_COMPLETE: {
      const todos = [...state.todos];

      const index = todos.findIndex(todo => todo.id === action.payload);

      todos[index].isCompleted = !todos[index].isCompleted;

      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
};

export default todo;
