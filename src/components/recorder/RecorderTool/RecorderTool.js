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
    recordingAvailable
  } = props;

  return (
    <div className="recorder-tool-container">
      <div className="recorder-actions">
        <button
          className="recorder-button"
          onClick={startRecording}
          disabled={isRecording}
        >
          <FaCircle size={30} color=" #d0021b" />
        </button>
        <button
          className="recorder-button"
          onClick={stopRecording}
          disabled={!isRecording}
        >
          <FaSquare size={30} color="black" />
        </button>
      </div>

      {recordingAvailable && (
        <div className="recorder-actions">
          <div className="recorder-button" onClick={playRecording}>
            <FaPlay size={27} color="green" />
          </div>
          <div className="recorder-button" onClick={clearRecording}>
            <TiDeleteOutline size={33} color="gray" />
          </div>
        </div>
      )}
      {isRecording && <div className="is-recording-prompt">RECORDING</div>}
    </div>
  );
};

export default RecorderTool;
