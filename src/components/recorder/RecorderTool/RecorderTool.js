import React from "react";
import "./RecorderTool.css";

import RecordingPlayer from "../RecordingPlayer/RecordingPlayer";
import TodoRecorder from "../TodoRecorder/TodoRecorder";

const RecorderTool = props => {
  return (
    <div className="recorder-tool-container">
      {props.recordingAvailable ? (
        <RecordingPlayer {...props} />
      ) : (
        <TodoRecorder {...props} />
      )}
    </div>
  );
};

export default RecorderTool;
