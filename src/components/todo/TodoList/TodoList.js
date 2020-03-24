import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoItem/TodoInput/TodoInput";

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

  removeTodo = id => {
    const { todos } = this.state;

    const updatedTodos = todos.filter(todo => todo.id !== id);

    this.setState({
      todos: updatedTodos
    });
  };

  editTodo = (id, updatedDescription) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    todos[index].description = updatedDescription;

    this.setState({
      todos
    });
  };

  renderTodos = () => {
    const { todos } = this.state;

    return todos.map(todo => (
      <TodoItem
        id={todo.id}
        todo={todo}
        onToggleTodoCheck={() => this.toggleTodoCheck(todo.id)}
        onRemoveTodo={() => this.removeTodo(todo.id)}
        onEditTodo={updatedDescription =>
          this.editTodo(todo.id, updatedDescription)
        }
      />
    ));
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-list-header">Todo List</div>
        <div className="todo-list">{this.renderTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
