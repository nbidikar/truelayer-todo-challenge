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

function clearRecording() {
  return {
    type: types.RECORDER.CLEAR_RECORDING
  };
}

export const RecorderActions = {
  startRecording,
  stopRecording,
  playRecording,
  clearRecording
};
