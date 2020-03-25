import * as types from "../types";

export const actionRecorder = store => next => action => {
  let result = next(action);

  if (
    (store.getState().recorder.isRecording && action.type.includes("todo/")) ||
    action.type === types.RECORDER.START_RECORDING ||
    action.type === types.RECORDER.STOP_RECORDING
  ) {
    const currentTodoState = store
      .getState()
      .todo.todos.map(todo => ({ ...todo }));

    const recordedAction = {
      action: action.type,
      currentState: currentTodoState
    };

    store.dispatch({
      type: types.RECORDER.RECORD_ACTION,
      payload: { recordedAction }
    });
  }

  return result;
};
