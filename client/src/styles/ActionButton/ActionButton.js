import { useState } from "react";
import Button from "@mui/material/Button";
import "./ActionButton.css";

const ActionButton = (props) => {
  return <Button onClick={props.onClick}>{props.name}</Button>;
};

export default ActionButton;
