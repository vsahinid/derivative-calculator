import React from 'react';
import { Button } from 'reactstrap';

const OperatorButton = (props) => {
    return (
        <div onClick={props.functionPassed}>
            <Button color="primary" style={{ width: "75px", margin: "2.5px" }}>{props.children}</Button>
        </div>
    );
};

export default OperatorButton;