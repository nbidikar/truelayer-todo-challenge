import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RecorderTool from "./RecorderTool";

const mockProps = {
  isRecording: false,
  isPlayingRecording: false,
  playRecordingTimeElapsed: "0:07",
  recordingTimestamp: "March 27th 2020 at 09:00",
  clearRecording: jest.fn(),
  startRecording: jest.fn(),
  stopRecording: jest.fn(),
  playRecording: jest.fn()
};

describe("unit test RecorderTool", () => {
  it("renders with recording available to play", () => {
    const { getByText } = render(
      <RecorderTool {...mockProps} recordingAvailable />
    );

    expect(getByText(mockProps.recordingTimestamp)).toBeInTheDOM();
  });
  it("renders with no recording saved", () => {
    const { getByText } = render(
      <RecorderTool {...mockProps} recordingAvailable={false} />
    );

    expect(getByText("No recordings saved")).toBeInTheDOM();
  });
});
