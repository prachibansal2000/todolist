import React from "react";
import Button from "./Button";
const header = ({ title, onAddToggle, showAddTask }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green "}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAddToggle}
      />
    </div>
  );
};
export default header;
