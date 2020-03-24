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
        onBlur={this.onSubmit}
        placeholder="Remove Todo?"
      />
    );
  }
}

export default TodoInput;
