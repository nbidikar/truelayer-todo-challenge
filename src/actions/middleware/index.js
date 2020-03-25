import { applyMiddleware } from "redux";
import { actionRecorder } from "./actionRecorder";
import { playRecording } from "./playRecording";

const middlewares = applyMiddleware(playRecording, actionRecorder);

export default middlewares;
