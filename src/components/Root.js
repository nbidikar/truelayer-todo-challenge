import React, { Component } from "react";
import "./Root.css";
import TodoTool from "./todo/TodoTool/TodoTool";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <TodoTool />
      </div>
    );
  }
}

export default Root;
