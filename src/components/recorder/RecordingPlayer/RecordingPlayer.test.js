import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RecordingPlayer from "./RecordingPlayer";

const mockProps = {
  playRecording: jest.fn(),
  recordingTimestamp: "March 27th 2020 at 09:00",
  clearRecording: jest.fn(),
  playRecordingTimeElapsed: "0:07"
};

describe("unit test RecordingPlayer", () => {
  it("renders and plays recording", () => {
    const { getByText } = render(
      <RecordingPlayer {...mockProps} isPlayingRecording />
    );

    expect(getByText(mockProps.playRecordingTimeElapsed)).toBeInTheDOM();
  });
  it("renders and does not play recording", () => {
    const { getByTestId } = render(
      <RecordingPlayer {...mockProps} isPlayingRecording={false} />
    );

    expect(getByTestId("clear-recording-btn")).toBeInTheDOM();
  });
});
