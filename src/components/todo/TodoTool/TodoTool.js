import React from "react";
import "./TodoTool.css";
import TodoList from "../TodoList/TodoList";
import RecorderToolContainer from "../../../containers/RecorderToolContainer";

const TodoTool = props => {
  const {
    todos,
    toggleTodoCheck,
    removeTodo,
    updateTodo,
    createTodo,
    isPlayingRecording
  } = props;

  return (
    <div className="todo-container">
      <div className="todo-list-header">Todo List</div>
      <RecorderToolContainer />
      <TodoList
        todos={todos}
        onToggleTodoCheck={toggleTodoCheck}
        onRemove={removeTodo}
        onEdit={updateTodo}
        onCreateTodo={createTodo}
        isPlayingRecording={isPlayingRecording}
      />
    </div>
  );
};

export default TodoTool;
