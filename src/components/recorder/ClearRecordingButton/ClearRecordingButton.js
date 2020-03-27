import React from "react";
import "./ClearRecordingButton.css";

import { TiDeleteOutline } from "react-icons/ti";

const ClearRecordingButton = props => {
  return (
    <button
      data-testid="clear-recording-btn"
      className="clear-recording-button"
      onClick={props.clearRecording}
    >
      <TiDeleteOutline size={26} color="gray" />
    </button>
  );
};

export default ClearRecordingButton;
