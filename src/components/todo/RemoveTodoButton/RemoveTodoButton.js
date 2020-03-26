import React from "react";
import "./RemoveTodoButton.css";
import { IoMdClose } from "react-icons/io";

const RemoveTodoButton = props => {
  const { onRemove } = props;

  return (
    <div className="action-button" onClick={onRemove}>
      <IoMdClose className="remove-action" />
    </div>
  );
};

export default RemoveTodoButton;
