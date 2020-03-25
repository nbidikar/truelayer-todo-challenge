import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ActionCreators from "../actions";

import TodoTool from "../components/todo/TodoTool/TodoTool";

const mapStateToProps = state => {
  let todos = state.todo.todos;

  if (state.recorder.isPlayingRecording) {
    todos = [
      ...state.recorder.recording[state.recorder.recordingStep].currentState
    ];
  }

  return {
    todos: todos,
    isPlayingRecording: state.recorder.isPlayingRecording,
    isRecording: state.recorder.isRecording
  };
};

const TodoToolContainer = props => <TodoTool {...props} />;

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoToolContainer);
