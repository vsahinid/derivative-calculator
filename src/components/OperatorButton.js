import React from "react";
import { Button } from "reactstrap";

const OperatorButton = props => {
  return (
    <div onClick={props.functionPassed}>
      <Button color="primary" style={{ width: "100%" }}>
        {props.children}
      </Button>
    </div>
  );
};

export default OperatorButton;
