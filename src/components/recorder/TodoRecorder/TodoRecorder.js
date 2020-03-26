import React from "react";
import "./TodoRecorder.css";

import RecordButton from "../RecordButton/RecordButton";

const TodoRecorder = props => {
  const { startRecording, stopRecording, isRecording } = props;

  return (
    <div className="todo-recorder">
      <RecordButton
        startRecording={startRecording}
        stopRecording={stopRecording}
        isRecording={isRecording}
      />
      <div
        className={
          "recorder-prompt " +
          (isRecording ? "recorder-prompt-recording" : "recorder-prompt-empty")
        }
      >
        {isRecording ? "RECORDING" : "No recordings saved"}
      </div>
    </div>
  );
};

export default TodoRecorder;
