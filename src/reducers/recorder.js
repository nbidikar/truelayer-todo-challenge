import { REHYDRATE } from "redux-persist/lib/constants";
import * as types from "../actions/types";

const initialState = {
  recording: [],
  recordingStep: {},
  isRecording: false,
  isPlayingRecording: false
};

const recorder = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload && action.payload.recording) {
        return {
          state,
          recording: action.payload.recording
        };
      } else {
        return state;
      }
    }
    case types.RECORDER.START_RECORDING: {
      return {
        ...state,
        isRecording: true
      };
    }
    case types.RECORDER.STOP_RECORDING: {
      return {
        ...state,
        isRecording: false
      };
    }
    case types.RECORDER.RECORD_ACTION: {
      const recording = [...state.recording];

      recording.push(action.payload);

      return {
        ...state,
        recording
      };
    }
    default:
      return state;
  }
};

export default recorder;
