import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import todo from "./todo";
import recorder from "./recorder";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"]
};

const recorderPersistConfig = {
  key: "recorder",
  storage: storage,
  whitelist: ["recording", "recordingTimestamp"]
};

const rootReducer = combineReducers({
  todo,
  recorder: persistReducer(recorderPersistConfig, recorder)
});

export default persistReducer(rootPersistConfig, rootReducer);
