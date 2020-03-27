import { RecorderActions } from "./recorder";
import * as types from "./types";

describe("recorder action creators unit tests", () => {
  it("dispatches startRecording", () => {
    const expectedAction = { type: types.RECORDER.START_RECORDING };

    expect(RecorderActions.startRecording()).toEqual(expectedAction);
  });
  it("dispatches stopRecording", () => {
    const expectedAction = { type: types.RECORDER.STOP_RECORDING };

    expect(RecorderActions.stopRecording()).toEqual(expectedAction);
  });
  it("dispatches playRecording", () => {
    const expectedAction = { type: types.RECORDER.PLAY_RECORDING };

    expect(RecorderActions.playRecording()).toEqual(expectedAction);
  });
  it("dispatches clearRecording", () => {
    const expectedAction = { type: types.RECORDER.CLEAR_RECORDING };

    expect(RecorderActions.clearRecording()).toEqual(expectedAction);
  });
});
