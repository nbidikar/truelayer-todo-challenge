import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "./CheckCircle.css";

const CheckCircle = props => {
  const { isChecked, onToggle } = props;

  return (
    <button
      className={"check-circle " + (isChecked ? "checked" : "unchecked")}
      onClick={onToggle}
    >
      {isChecked && <IoMdCheckmark className="checkmark" />}
    </button>
  );
};

export default CheckCircle;
