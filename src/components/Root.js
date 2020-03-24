import React, { Component } from "react";
import "./Root.css";
// import TodoTool from "./todo/TodoTool/TodoTool";
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
