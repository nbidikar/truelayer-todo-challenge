import * as types from "../actions/types";
import { REHYDRATE } from "redux-persist/lib/constants";
import recorderReducer from "./recorder";

jest.mock("moment", () => () => ({ format: () => "Mock TimeStamp" }));

const initialState = {
  recording: [],
  recordingTimestamp: "",
  recordingStep: 0,
  isRecording: false,
  isPlayingRecording: false,
  playRecordingTimeElapsed: 0
};

const mockRecording = [
  { action: types.RECORDER.START_RECORDING },
  { action: types.TODO.TOGGLE_COMPLETE },
  { action: types.TODO.UPDATE_TODO },
  { action: types.RECORDER.STOP_RECORDING }
];

describe("recorderReducer unit test", () => {
  it("should return initialState", () => {
    expect(recorderReducer(undefined, {})).toEqual(initialState);
  });
  describe("should handle REHYDRATE", () => {
    it("should rehydrated with persisted state", () => {
      const rehydrateAction = {
        type: REHYDRATE,
        payload: {
          recording: ["Saved recording"],
          recordingTimestamp: "March 25 2020 at 09:00"
        }
      };

      const updatedState = recorderReducer(initialState, rehydrateAction);

      expect(updatedState.recordingTimestamp).toBe("March 25 2020 at 09:00");
    });
    it("should keep initial state due to no persisted state", () => {
      const rehydrateAction = {
        type: REHYDRATE,
        payload: null
      };

      const updatedState = recorderReducer(initialState, rehydrateAction);

      expect(updatedState).toEqual(initialState);
    });
  });
  it("should handle START_RECORDING", () => {
    const updatedState = recorderReducer(initialState, {
      type: types.RECORDER.START_RECORDING
    });

    const expectedState = { ...initialState, isRecording: true };

    expect(updatedState).toEqual(expectedState);
  });
  describe("should handle STOP_RECORDING", () => {
    it("has recorded todo actions", () => {
      const onStopRecordingState = {
        ...initialState,
        recording: mockRecording,
        isRecording: true
      };

      const updatedState = recorderReducer(onStopRecordingState, {
        type: types.RECORDER.STOP_RECORDING
      });

      const expectedState = {
        ...onStopRecordingState,
        isRecording: false,
        recordingTimestamp: "Mock TimeStamp"
      };

      expect(updatedState).toEqual(expectedState);
    });
    it("did not record any todo actions", () => {
      const mockRecording = [
        { action: types.RECORDER.START_RECORDING },
        { action: types.RECORDER.STOP_RECORDING }
      ];

      const onStopRecordingState = {
        ...initialState,
        recording: mockRecording,
        isRecording: true
      };

      const updatedState = recorderReducer(onStopRecordingState, {
        type: types.RECORDER.STOP_RECORDING
      });

      expect(updatedState).toEqual(initialState);
    });
  });
  it("should handle RECORD_ACTION", () => {
    const recordAction = {
      type: types.RECORDER.RECORD_ACTION,
      payload: { recordedAction: { some: "state" } }
    };

    const onRecordState = {
      ...initialState,
      isRecording: true
    };

    const updatedState = recorderReducer(onRecordState, recordAction);

    expect(updatedState.recording.length).toEqual(1);
  });
  it("should handle CLEAR_RECORDING", () => {
    const beforeClearState = {
      ...initialState,
      recording: [],
      recordingTimestamp: "timestamp"
    };

    const updatedState = recorderReducer(beforeClearState, {
      type: types.RECORDER.CLEAR_RECORDING
    });

    expect(updatedState).toEqual(initialState);
  });
  it("should handle PLAY_RECORDING", () => {
    const beforePlayState = {
      ...initialState,
      recording: mockRecording,
      recordingTimestamp: "timestamp"
    };

    const updatedState = recorderReducer(beforePlayState, {
      type: types.RECORDER.PLAY_RECORDING
    });

    expect(updatedState.isPlayingRecording).toBeTruthy();
  });
  describe("should handle PLAY_NEXT_ACTION", () => {
    it("plays next action", () => {
      const beforePlayActionState = {
        ...initialState,
        recording: mockRecording,
        recordingTimestamp: "timestamp",
        recordingStep: 2,
        playRecordingTimeElapsed: "0:02"
      };

      const updatedState = recorderReducer(beforePlayActionState, {
        type: types.RECORDER.PLAY_NEXT_ACTION
      });

      expect(updatedState.recordingStep).toBe(3);
    });
    it("finished playing through actions", () => {
      const beforePlayActionState = {
        ...initialState,
        recording: mockRecording,
        recordingTimestamp: "timestamp",
        recordingStep: 3
      };

      const updatedState = recorderReducer(beforePlayActionState, {
        type: types.RECORDER.PLAY_NEXT_ACTION
      });

      expect(updatedState.recordingStep).toBe(0);
      expect(updatedState.isPlayingRecording).toBeFalsy();
      expect(updatedState.playRecordingTimeElapsed).toBe(0);
    });
  });
});
