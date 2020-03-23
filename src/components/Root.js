import React, { Component } from "react";
import "./Root.css";

import { TodoList } from "./todo";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <TodoList />
      </div>
    );
  }
}

export default Root;
