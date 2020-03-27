import React from "react";
import "./CreateTodo.css";
import { IoMdAdd } from "react-icons/io";

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    this.inputRef = null;
  }

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  updateInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.onCreateTodo();
    }
  };

  onCreateTodo = () => {
    const { inputValue } = this.state;

    if (inputValue !== "") {
      const { onCreateTodo } = this.props;
      onCreateTodo(inputValue);

      this.setState({ inputValue: "" });
    }

    this.inputRef.focus();
  };

  render() {
    return (
      <div className="create-todo-container">
        <button
          data-testid="create-todo-button"
          className="create-button"
          onClick={this.onCreateTodo}
        >
          <IoMdAdd className="create-icon" size={30} />
        </button>
        <input
          ref={ref => {
            this.inputRef = ref;
          }}
          value={this.state.inputValue}
          type="search"
          className="create-todo-input"
          onKeyPress={this.onKeyPress}
          placeholder="Create a new todo"
          onChange={this.updateInputValue}
        />
      </div>
    );
  }
}

export default CreateTodo;
