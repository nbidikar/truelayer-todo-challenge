import React from "react";
import "./TodoItem.css";
import CheckCircle from "./CheckCircle/CheckCircle";
import TodoInput from "./TodoInput/TodoInput";
import RemoveTodoButton from "./RemoveTodoButton/RemoveTodoButton";

const TodoItem = props => {
  const { todo, onToggleTodoCheck, onRemoveTodo, onEditTodo } = props;
  const { description, isCompleted } = todo;
  return (
    <div className="todo-item">
      <CheckCircle isChecked={isCompleted} onToggle={onToggleTodoCheck} />
      <TodoInput
        value={description}
        isCompleted={isCompleted}
        onSubmit={onEditTodo}
      />
      <div className="remove-button">
        <RemoveTodoButton onRemove={onRemoveTodo} />
      </div>
    </div>
  );
};

export default TodoItem;
