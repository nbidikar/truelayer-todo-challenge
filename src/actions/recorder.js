import * as types from "./types";

function startRecording() {
  return {
    type: types.RECORDER.START_RECORDING
  };
}

function stopRecording() {
  return {
    type: types.RECORDER.STOP_RECORDING
  };
}

function playRecording() {
  return {
    type: types.RECORDER.PLAY_RECORDING
  };
}

export const RecorderActions = {
  startRecording,
  stopRecording,
  playRecording
};
