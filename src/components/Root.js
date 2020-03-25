import React, { Component } from "react";
import "./Root.css";
import TodoToolContainer from "../containers/TodoToolContainer";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <TodoToolContainer />
      </div>
    );
  }
}

export default Root;
