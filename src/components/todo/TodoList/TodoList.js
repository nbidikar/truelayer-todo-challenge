import React, { PureComponent } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends PureComponent {
  renderTodos() {
    const { todos, onToggleTodoCheck, onRemove, onEdit } = this.props;

    return todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleTodoCheck={() => onToggleTodoCheck(todo.id)}
        onRemoveTodo={() => onRemove(todo.id)}
        onEditTodo={description => onEdit(todo.id, description)}
      />
    ));
  }

  render() {
    return <div className="todo-list">{this.renderTodos()}</div>;
  }
}

export default TodoList;
