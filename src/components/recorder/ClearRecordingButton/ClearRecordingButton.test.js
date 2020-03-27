import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ClearRecordingButton from "./ClearRecordingButton";

describe("unit test ClearRecordingButton", () => {
  it("fires clearRecording", () => {
    const mock = jest.fn();

    const { getByTestId } = render(
      <ClearRecordingButton clearRecording={mock} />
    );

    fireEvent.click(getByTestId("clear-recording-btn"));

    expect(mock).toHaveBeenCalled();
  });
});
