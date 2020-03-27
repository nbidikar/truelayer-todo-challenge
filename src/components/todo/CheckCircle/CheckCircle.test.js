import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CheckCircle from "./CheckCircle";

describe("CheckCircle unit test", () => {
  const mock = jest.fn();

  it("renders when checked and fires onToggle event", () => {
    const { getByTestId } = render(
      <CheckCircle isChecked={true} onToggle={mock} />
    );

    fireEvent.click(getByTestId("check-circle"));

    expect(mock).toHaveBeenCalled();
  });
  it("render when not checked", () => {
    render(<CheckCircle isChecked={false} onToggle={mock} />);
  });
});
