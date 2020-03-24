import React, { Component } from "react";
import "./TodoInput.css";

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    this.inputRef = null;
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({
      inputValue: value
    });
  }

  updateInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = e => {
    const { onSubmit, value } = this.props;
    const { inputValue } = this.state;

    if (e.key === "Enter") {
      if (value !== inputValue) {
        onSubmit(inputValue);
      }
      this.inputRef.blur();
    }
  };

  render() {
    const { isCompleted } = this.props;
    const { inputValue } = this.state;

    return (
      <input
        className={"todo-input " + (isCompleted && "item-completed")}
        ref={ref => {
          this.inputRef = ref;
        }}
        value={inputValue}
        type="text"
        onChange={this.updateInputValue}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default TodoInput;
