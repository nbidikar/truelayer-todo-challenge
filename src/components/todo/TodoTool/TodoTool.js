import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./TodoTool.css";
import TodoList from "../TodoList/TodoList";

class TodoTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: "123", description: "Walk the dog", isCompleted: true },
        { id: "456", description: "Do taxes", isCompleted: false },
        { id: "789", description: "Cut hair", isCompleted: true },
        { id: "101112", description: "Clean dishes", isCompleted: false },
        { id: "131415", description: "Tidy desk", isCompleted: false },
        { id: "161718", description: "Take out trash", isCompleted: false }
      ]
    };
  }

  toggleTodoCheck = id => {
    const updatedTodos = [...this.state.todos];

    const index = updatedTodos.findIndex(todo => todo.id === id);

    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    this.setState({
      todos: updatedTodos
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  editTodo = (id, updatedDescription) => {
    if (updatedDescription !== "") {
      const updatedTodos = [...this.state.todos];

      const index = updatedTodos.findIndex(todo => todo.id === id);

      updatedTodos[index].description = updatedDescription;

      this.setState({
        todos: updatedTodos
      });
    } else {
      this.removeTodo(id);
    }
  };

  createTodo = todoDescription => {
    const newTodo = {
      id: uuid(),
      description: todoDescription,
      isCompleted: false
    };

    const todos = [...this.state.todos];

    todos.unshift(newTodo);

    this.setState({
      todos
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-list-header">Todo List</div>
        <TodoList
          todos={todos}
          onToggleTodoCheck={this.toggleTodoCheck}
          onRemove={this.removeTodo}
          onEdit={this.editTodo}
          onCreateTodo={this.createTodo}
        />
      </div>
    );
  }
}

export default TodoTool;
