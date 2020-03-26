import React from "react";
import "./ClearRecordingButton.css";

import { TiDeleteOutline } from "react-icons/ti";

const ClearRecordingButton = props => {
  return (
    <button className="clear-recording-button" onClick={props.clearRecording}>
      <TiDeleteOutline size={40} color="gray" />
    </button>
  );
};

export default ClearRecordingButton;
