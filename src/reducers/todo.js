import { v4 as uuid } from "uuid";
import { REHYDRATE } from "redux-persist/lib/constants";
import * as types from "../actions/types";

const initialState = {
  todos: []
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload && action.payload.todos) {
        return {
          ...state,
          todos: action.payload.todos
        };
      } else {
        return state;
      }
    }
    case types.TODO.CREATE_TODO: {
      const newTodo = {
        id: uuid(),
        creationDate: Date.now(),
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
