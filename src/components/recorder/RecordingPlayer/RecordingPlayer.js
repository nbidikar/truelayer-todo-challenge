import React from "react";
import "./RecordingPlayer.css";

import ClearRecordingButton from "../ClearRecordingButton/ClearRecordingButton";
import PlayerRecordingButton from "../PlayRecordingButton/PlayRecordingButton";

const RecordingPlayer = props => {
  const {
    playRecording,
    recordingTimestamp,
    clearRecording,
    isPlayingRecording,
    playRecordingTimeElapsed
  } = props;

  return (
    <div className="recorder-player-container">
      <PlayerRecordingButton
        playRecording={playRecording}
        disabled={isPlayingRecording}
      />
      <div className="recording-timestamp">{recordingTimestamp}</div>
      <div className="clear-btn">
        {isPlayingRecording ? (
          <div className="recording-time-elapsed">
            {playRecordingTimeElapsed}
          </div>
        ) : (
          <ClearRecordingButton clearRecording={clearRecording} />
        )}
      </div>
    </div>
  );
};

export default RecordingPlayer;
