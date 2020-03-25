import { applyMiddleware } from "redux";
import { actionRecorder } from "./actionRecorder";

const middlewares = applyMiddleware(actionRecorder);

export default middlewares;
