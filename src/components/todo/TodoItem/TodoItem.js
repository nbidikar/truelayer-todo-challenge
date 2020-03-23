import React from "react";
import "./TodoItem.css";
import CheckCircle from "./CheckCircle/CheckCircle";

const TodoItem = props => {
  const { todo, onToggleTodoCheck } = props;
  const { description, isCompleted } = todo;

  return (
    <div className="todo-item">
      <CheckCircle isChecked={isCompleted} onToggle={onToggleTodoCheck} />
      <div className="todo-item-text">{description}</div>
    </div>
  );
};

export default TodoItem;
