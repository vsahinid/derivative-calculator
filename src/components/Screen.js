import React from "react";
import { Button } from "reactstrap";

const Screen = props => {
  return (
    <div onClick={props.functionPassed} className="is-screen">
      <Button
        color="secondary"
        style={{ width: "100%", height: "50px" }}
        disabled
      >
        {props.children}
      </Button>
    </div>
  );
};

export default Screen;
