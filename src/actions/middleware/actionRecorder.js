import * as types from "../types";

export const actionRecorder = store => next => action => {
  const result = next(action);

  if (action.type === types.RECORDER.START_RECORDING) {
    const recordedAction = {
      action: "START",
      currentState: store.getState().todo.todos
    };

    store.dispatch({
      type: types.RECORDER.RECORD_ACTION,
      payload: recordedAction
    });
  }

  if (action.type === types.RECORDER.STOP_RECORDING) {
    const recordedAction = {
      action: "STOP",
      currentState: store.getState().todo.todos
    };

    store.dispatch({
      type: types.RECORDER.RECORD_ACTION,
      payload: recordedAction
    });

    // console.log(store.getState().recorder.recording);
  }

  if (store.getState().recorder.isRecording && action.type.includes("todo/")) {
    const recordedAction = {
      action: action.type,
      currentState: store.getState().todo.todos
    };

    store.dispatch({
      type: types.RECORDER.RECORD_ACTION,
      payload: recordedAction
    });
  }

  return result;
};
