import React from "react";
import "./TodoTool.css";
import TodoList from "../TodoList/TodoList";

const TodoTool = props => {
  const { todos, toggleTodoCheck, removeTodo, updateTodo, createTodo } = props;

  return (
    <div className="todo-container">
      <div className="todo-list-header">Todo List</div>
      <TodoList
        todos={todos}
        onToggleTodoCheck={toggleTodoCheck}
        onRemove={removeTodo}
        onEdit={updateTodo}
        onCreateTodo={createTodo}
      />
    </div>
  );
};

export default TodoTool;
