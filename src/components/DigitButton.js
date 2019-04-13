import React from "react";
import { Button } from "reactstrap";

const DigitButton = props => {
  return (
    <div onClick={props.functionPassed}>
      <Button color="success" style={{ width: "100%" }}>
        {props.children}
      </Button>
    </div>
  );
};

export default DigitButton;
