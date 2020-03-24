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
    if (e.key === "Enter") {
      this.onSubmit();
      this.inputRef.blur();
    }
  };

  onSubmit = () => {
    const { onSubmit, value } = this.props;
    const { inputValue } = this.state;
    if (value !== inputValue) {
      onSubmit(inputValue);
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
        onBlur={this.onSubmit}
      />
    );
  }
}

export default TodoInput;
