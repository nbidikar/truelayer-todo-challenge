import React from "react";
import "./TodoItem.css";
import CheckCircle from "../CheckCircle/CheckCircle";
import TodoInput from "../TodoInput/TodoInput";
import RemoveTodoButton from "../RemoveTodoButton/RemoveTodoButton";

const TodoItem = props => {
  const { todo, onToggleTodoCheck, onRemoveTodo, onEditTodo } = props;
  const { id, description, isCompleted } = todo;
  return (
    <div className="todo-item">
      <CheckCircle
        isChecked={isCompleted}
        onToggle={() => onToggleTodoCheck(id)}
      />
      <TodoInput
        value={description}
        isCompleted={isCompleted}
        onSubmit={description => onEditTodo(id, description)}
      />
      <div className="remove-button">
        <RemoveTodoButton onRemove={() => onRemoveTodo(id)} />
      </div>
    </div>
  );
};

export default TodoItem;
