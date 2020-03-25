import { REHYDRATE } from "redux-persist/lib/constants";
import * as types from "../actions/types";

const initialState = {
  recording: [],
  recordingStep: 0,
  isRecording: false,
  isPlayingRecording: false
};

const recorder = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload && action.payload.recording) {
        return {
          ...state,
          recording: action.payload.recording
        };
      } else {
        return state;
      }
    }
    case types.RECORDER.START_RECORDING: {
      return {
        ...state,
        recording: [],
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

      recording.push(action.payload.recordedAction);

      return {
        ...state,
        recording
      };
    }
    case types.RECORDER.CLEAR_RECORDING: {
      return {
        ...state,
        recording: []
      };
    }
    case types.RECORDER.PLAY_RECORDING: {
      return {
        ...state,
        isPlayingRecording: true
      };
    }
    case types.RECORDER.PLAY_NEXT_ACTION: {
      const { recordingStep, recording } = state;

      if (recordingStep < recording.length - 1) {
        return {
          ...state,
          recordingStep: recordingStep + 1
        };
      } else {
        return {
          ...state,
          recordingStep: 0,
          isPlayingRecording: false
        };
      }
    }
    default:
      return state;
  }
};

export default recorder;
