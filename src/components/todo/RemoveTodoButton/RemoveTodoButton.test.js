import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RemoveTodoButton from "./RemoveTodoButton";

describe("unit test RemoveTodoButton", () => {
  it("fires onRemove", () => {
    const mock = jest.fn();

    const { getByTestId } = render(<RemoveTodoButton onRemove={mock} />);

    fireEvent.click(getByTestId("remove-todo-button"));

    expect(mock).toHaveBeenCalled();
  });
});
