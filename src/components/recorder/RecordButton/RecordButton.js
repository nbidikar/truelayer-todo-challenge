import React from "react";
import "./RecordButton.css";

const RecordButton = props => {
  const { startRecording, stopRecording, isRecording } = props;

  return (
    <button
      data-testid="record-btn"
      className={"record-icon " + (isRecording && "record-icon-is-recording")}
      onClick={isRecording ? stopRecording : startRecording}
    />
  );
};

export default RecordButton;
