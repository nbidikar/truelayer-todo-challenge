import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoRecorder from "./TodoRecorder";

const mockProps = {
  startRecording: jest.fn(),
  stopRecording: jest.fn()
};

describe("unit test TodoRecorder", () => {
  it("is recording todo actions", () => {
    const { getByText } = render(<TodoRecorder {...mockProps} isRecording />);

    expect(getByText("RECORDING")).toBeInTheDOM();
  });
  it("is not recording and no recording saved", () => {
    const { getByText } = render(
      <TodoRecorder {...mockProps} isRecording={false} />
    );

    expect(getByText("No recordings saved")).toBeInTheDOM();
  });
});
