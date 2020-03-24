import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ActionCreators from "../actions";

import TodoTool from "../components/todo/TodoTool/TodoTool";

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const TodoToolContainer = props => <TodoTool {...props} />;

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoToolContainer);
