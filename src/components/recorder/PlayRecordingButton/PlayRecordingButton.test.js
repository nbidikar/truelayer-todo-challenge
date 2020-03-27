import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PlayRecordingButton from "./PlayRecordingButton";

describe("unit test PlayRecordingButton", () => {
  it("fires playRecording", () => {
    const mock = jest.fn();

    const { getByTestId } = render(
      <PlayRecordingButton playRecording={mock} disabled={false} />
    );

    fireEvent.click(getByTestId("play-recording-btn"));

    expect(mock).toHaveBeenCalled();
  });
  it("render button disabled", () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <PlayRecordingButton playRecording={mock} disabled />
    );

    fireEvent.click(getByTestId("play-recording-btn"));

    expect(mock).toHaveBeenCalledTimes(0);
  });
});
