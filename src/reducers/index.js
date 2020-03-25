import { combineReducers } from "redux";

import todo from "./todo";
import recorder from "./recorder";

export default combineReducers({
  todo,
  recorder
});
