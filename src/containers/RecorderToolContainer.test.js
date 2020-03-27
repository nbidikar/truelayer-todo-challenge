import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import rootReducer from "../reducers";

const initialState = {};

const store = createStore(rootReducer, initialState);

import RecorderToolContainer from "./RecorderToolContainer";

describe("unit test RecorderToolContainer", () => {
  it("renders", () => {
    render(
      <Provider store={store}>
        <RecorderToolContainer />
      </Provider>
    );
  });
});
