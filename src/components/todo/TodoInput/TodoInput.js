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
    this.setState({
      inputValue: this.props.value
    });

    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        inputValue: this.props.value
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  updateInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
  };

  handleClickOutside = e => {
    if (!this.inputRef.contains(e.target)) {
      this.onSubmit();
    }
  };

  onSubmit = () => {
    const { onSubmit, value } = this.props;
    const { inputValue } = this.state;

    if (value !== inputValue) {
      onSubmit(inputValue);
    }

    this.inputRef.blur();
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
        placeholder="Remove Todo?"
        onKeyPress={this.onKeyPress}
      />
    );
  }
}

export default TodoInput;
