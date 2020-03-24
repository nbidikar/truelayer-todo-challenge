import React from "react";
import { FaCheck } from "react-icons/fa";
import "./CheckCircle.css";

const CheckCircle = props => {
  const { isChecked, onToggle } = props;

  return (
    <button
      className={"check-circle " + (isChecked ? "checked" : "unchecked")}
      onClick={() => onToggle()}
    >
      {isChecked && <FaCheck className="checkmark" />}
    </button>
  );
};

export default CheckCircle;
