import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ActionCreators from "../actions";
import RecorderTool from "../components/recorder/RecorderTool/RecorderTool";

const mapStateToProps = state => ({
  isRecording: state.recorder.isRecording,
  recordingAvailable:
    state.recorder.recording.length > 1 && !state.recorder.isRecording,
  recordingTimestamp: state.recorder.recordingTimestamp
});

const RecorderToolContainer = props => <RecorderTool {...props} />;

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecorderToolContainer);
