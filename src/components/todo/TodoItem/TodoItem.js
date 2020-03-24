import React from "react";
import "./TodoItem.css";
import CheckCircle from "./CheckCircle/CheckCircle";
import TodoInput from "./TodoInput/TodoInput";
import RemoveTodoButton from "./RemoveTodoButton/RemoveTodoButton";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { todo, onToggleTodoCheck, onRemoveTodo, onEditTodo } = this.props;
    const { description, isCompleted } = todo;

    const { isHovered } = this.state;

    return (
      <div
        className="todo-item"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <CheckCircle isChecked={isCompleted} onToggle={onToggleTodoCheck} />
        <TodoInput
          value={description}
          isCompleted={isCompleted}
          onSubmit={onEditTodo}
        />
        {isHovered && <RemoveTodoButton onRemove={onRemoveTodo} />}
      </div>
    );
  }
}

export default TodoItem;
