import React from "react";
import "./PlayRecordingButton.css";

import { FaPlay } from "react-icons/fa";

const PlayerRecordingButton = props => {
  return (
    <button
      className="play-button"
      onClick={props.playRecording}
      disabled={props.disabled}
    >
      <FaPlay
        size={23}
        className={props.disabled ? "play-icon-disabled" : "play-icon"}
      />
    </button>
  );
};

export default PlayerRecordingButton;
