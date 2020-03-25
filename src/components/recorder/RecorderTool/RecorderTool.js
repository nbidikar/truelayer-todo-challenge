import React from "react";
import "./RecorderTool.css";

import { FaSquare, FaCircle, FaPlay } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const RecorderTool = props => {
  const {
    startRecording,
    stopRecording,
    playRecording,
    clearRecording,
    isRecording,
    recordingAvailable,
    recordingTimestamp
  } = props;

  return (
    <div className="recorder-tool-container">
      {recordingAvailable && (
        <div className="recorder-actions recorder-actions-left">
          <div className="recorder-button" onClick={playRecording}>
            <FaPlay size={27} color="green" />
          </div>
          <div className="recording-timestamp">{recordingTimestamp}</div>
          <div className="recorder-button" onClick={clearRecording}>
            <TiDeleteOutline size={26} color="gray" />
          </div>
        </div>
      )}
      {isRecording && <div className="is-recording-prompt">RECORDING</div>}
      <div className="recorder-actions recorder-actions-right">
        {isRecording ? (
          <button
            className="recorder-button"
            onClick={stopRecording}
            disabled={!isRecording}
          >
            <FaSquare size={32} className="stop-icon " />
          </button>
        ) : (
          <button
            className="recorder-button"
            onClick={startRecording}
            disabled={isRecording}
          >
            <FaCircle size={32} className="record-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RecorderTool;
