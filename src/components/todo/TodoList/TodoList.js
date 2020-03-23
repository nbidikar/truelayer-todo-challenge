import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: "123", description: "Walk the dog", isCompleted: true },
        { id: "456", description: "Do taxes", isCompleted: false },
        { id: "789", description: "Cut hair", isCompleted: true }
      ]
    };
  }

  toggleTodoCheck = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState({
      todos
    });
  };

  renderTodos = () => {
    const { todos } = this.state;

    const items = todos.map(todo => (
      <TodoItem
        id={todo.id}
        todo={todo}
        onToggleTodoCheck={() => this.toggleTodoCheck(todo.id)}
      />
    ));

    return items;
  };

  render() {
    return (
      <div className="todo-list">
        <div className="todo-list-header">Todo List</div>
        {this.renderTodos()}
      </div>
    );
  }
}

export default TodoList;
