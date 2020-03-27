import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RecordButton from "./RecordButton";

const mockProps = {
  startRecording: jest.fn(),
  stopRecording: jest.fn()
};

describe("unit test RecordButton", () => {
  it("fires startRecording", () => {
    const { getByTestId } = render(
      <RecordButton {...mockProps} isRecording={false} />
    );

    fireEvent.click(getByTestId("record-btn"));

    expect(mockProps.startRecording).toHaveBeenCalled();
  });
  it("fires stopRecording", () => {
    const { getByTestId } = render(<RecordButton {...mockProps} isRecording />);

    fireEvent.click(getByTestId("record-btn"));

    expect(mockProps.stopRecording).toHaveBeenCalled();
  });
});
