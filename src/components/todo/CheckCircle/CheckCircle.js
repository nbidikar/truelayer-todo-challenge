import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "./CheckCircle.css";

const CheckCircle = props => {
  const { isChecked, onToggle } = props;

  return (
    <div
      className={"check-circle " + (isChecked ? "checked" : "unchecked")}
      onClick={onToggle}
    >
      <IoMdCheckmark
        size={18}
        className={isChecked ? "checkmark-completed" : "checkmark-open"}
      />
    </div>
  );
};

export default CheckCircle;
