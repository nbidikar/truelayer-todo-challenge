import * as types from "../types";

let recordingTimer = null;

export const playRecording = store => next => action => {
  if (action.type === types.RECORDER.PLAY_RECORDING) {
    recordingTimer = setInterval(() => {
      store.dispatch({
        type: types.RECORDER.PLAY_NEXT_ACTION
      });
    }, 1000);
  }
  if (
    action.type === types.RECORDER.PLAY_NEXT_ACTION &&
    !store.getState().recorder.isPlayingRecording
  ) {
    clearInterval(recordingTimer);
  }

  next(action);
};
