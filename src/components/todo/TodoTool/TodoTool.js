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
    isPlayingRecording,
    isRecording
  } = props;

  return (
    <div className="todo-container">
      <div className="todo-list-header">TrueLayer Todo Challenge</div>
      <RecorderToolContainer />
      <TodoList
        todos={todos}
        onToggleTodoCheck={toggleTodoCheck}
        onRemove={removeTodo}
        onEdit={updateTodo}
        onCreateTodo={createTodo}
        isPlayingRecording={isPlayingRecording}
        isRecording={isRecording}
      />
    </div>
  );
};

export default TodoTool;
