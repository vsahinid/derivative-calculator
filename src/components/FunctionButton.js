import React from "react";
import { Button } from "reactstrap";

const FunctionButton = props => {
  return (
    <div onClick={props.functionPassed}>
      <Button color="warning" style={{ width: "100%" }}>
        {props.children}
      </Button>
    </div>
  );
};

export default FunctionButton;
