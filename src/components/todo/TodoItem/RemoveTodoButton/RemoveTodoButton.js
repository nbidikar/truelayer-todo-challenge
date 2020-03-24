import React from "react";
import "./RemoveTodoButton.css";
import { IoMdClose } from "react-icons/io";

const RemoveTodoButton = props => {
  const { onRemove } = props;

  return (
    <button className="action-button" onClick={onRemove}>
      <IoMdClose className="action-icon remove-action" />
    </button>
  );
};

export default RemoveTodoButton;
