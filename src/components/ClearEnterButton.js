import React from "react";
import { Button } from "reactstrap";

const ClearEnterButton = props => {
  return (
    <div onClick={props.functionPassed}>
      <Button color="danger" style={{ width: "100%" }}>
        {props.children}
      </Button>
    </div>
  );
};

export default ClearEnterButton;
