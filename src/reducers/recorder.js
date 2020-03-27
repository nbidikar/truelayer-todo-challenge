import moment from "moment";
import { REHYDRATE } from "redux-persist/lib/constants";
import * as types from "../actions/types";

const initialState = {
  recording: [],
  recordingTimestamp: "",
  recordingStep: 0,
  isRecording: false,
  isPlayingRecording: false,
  playRecordingTimeElapsed: 0
};

function getTimeElapsedInMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  let secondsRemainder = seconds - minutes * 60;

  if (secondsRemainder < 10) {
    secondsRemainder = "0" + secondsRemainder.toString();
  }

  return `${minutes}:${secondsRemainder}`;
}

const recorder = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      if (
        action.payload &&
        action.payload.recording &&
        action.payload.recordingTimestamp
      ) {
        return {
          ...state,
          recording: action.payload.recording,
          recordingTimestamp: action.payload.recordingTimestamp
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
      if (
        state.recording.every(record => record.action.includes("recorder/"))
      ) {
        return {
          ...state,
          isRecording: false,
          recording: []
        };
      } else {
        const timestamp = moment().format("MMMM Do YYYY [at] HH:mm");

        return {
          ...state,
          isRecording: false,
          recordingTimestamp: timestamp
        };
      }
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
        recording: [],
        recordingTimestamp: ""
      };
    }
    case types.RECORDER.PLAY_RECORDING: {
      const timeElapsed = getTimeElapsedInMinutes(state.recording.length - 1);

      return {
        ...state,
        isPlayingRecording: true,
        recordingStep: 0,
        playRecordingTimeElapsed: timeElapsed
      };
    }
    case types.RECORDER.PLAY_NEXT_ACTION: {
      const { recordingStep, recording } = state;

      if (recordingStep < recording.length - 1) {
        const timeElapsed = getTimeElapsedInMinutes(
          recording.length - recordingStep - 2
        );

        return {
          ...state,
          recordingStep: recordingStep + 1,
          playRecordingTimeElapsed: timeElapsed
        };
      } else {
        return {
          ...state,
          recordingStep: 0,
          isPlayingRecording: false,
          playRecordingTimeElapsed: 0
        };
      }
    }
    default:
      return state;
  }
};

export default recorder;
