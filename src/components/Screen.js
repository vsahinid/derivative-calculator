import React from "react";
import { Button } from "reactstrap";

const Screen = props => {
  return (
    <div onClick={props.functionPassed}>
      <Button
        color="secondary"
        style={{ width: "475px", height: "50px", margin: "2.5px" }}
        disabled
      >
        {props.children}
      </Button>
    </div>
  );
};

export default Screen;
