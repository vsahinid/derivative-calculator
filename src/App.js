import React, { Component } from "react";
import "./App.css";
import OperatorButton from "./components/OperatorButton";
import FunctionButton from "./components/FunctionButton";
import DigitButton from "./components/DigitButton";
import Screen from "./components/Screen";
import ClearEnterButton from "./components/ClearEnterButton";
import * as math from "mathjs";
import Credits from "../src/components/Credits";

class App extends Component {
  state = {
    input: ""
  };

  handleClick = value => {
    this.setState({
      input: this.state.input + value
    });
  };

  clearFunction = () => {
    this.setState({
      input: ""
    });
  };

  calculateDerivative = () => {
    //make sure # of ( == number of ) if not add an extra ) until they are equal
    this.setState({
      input: math.derivative(this.state.input, "x").toString()
    });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <h1 style={{ textAlign: "center" }}>
            Vas's Simple Derivative Calculator
          </h1>
          <div className="row">
            <Screen>{this.state.input}</Screen>
          </div>
          <div className="row">
            <FunctionButton functionPassed={this.handleClick.bind(this, "x")}>
              x
            </FunctionButton>
            <FunctionButton functionPassed={this.handleClick.bind(this, "^(")}>
              x^n
            </FunctionButton>
            <FunctionButton functionPassed={this.handleClick.bind(this, "e^(")}>
              e^x
            </FunctionButton>
            <FunctionButton
              functionPassed={this.handleClick.bind(this, "log(")}
            >
              log(x)
            </FunctionButton>
            <FunctionButton
              functionPassed={this.handleClick.bind(this, "sin(")}
            >
              sin(x)
            </FunctionButton>
            <FunctionButton
              functionPassed={this.handleClick.bind(this, "cos(")}
            >
              cos(x)
            </FunctionButton>
          </div>
          <div className="row">
            <OperatorButton functionPassed={this.handleClick.bind(this, "+")}>
              +
            </OperatorButton>
            <OperatorButton functionPassed={this.handleClick.bind(this, "-")}>
              -
            </OperatorButton>
            <OperatorButton functionPassed={this.handleClick.bind(this, "/")}>
              /
            </OperatorButton>
            <OperatorButton functionPassed={this.handleClick.bind(this, "*")}>
              *
            </OperatorButton>
            <OperatorButton functionPassed={this.handleClick.bind(this, "(")}>
              (
            </OperatorButton>
            <OperatorButton functionPassed={this.handleClick.bind(this, ")")}>
              )
            </OperatorButton>
          </div>
          <div className="row">
            <DigitButton functionPassed={this.handleClick.bind(this, "1")}>
              1
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "2")}>
              2
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "3")}>
              3
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "4")}>
              4
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "5")}>
              5
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "6")}>
              6
            </DigitButton>
          </div>
          <div className="row">
            <DigitButton functionPassed={this.handleClick.bind(this, "7")}>
              7
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "8")}>
              8
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "9")}>
              9
            </DigitButton>
            <DigitButton functionPassed={this.handleClick.bind(this, "0")}>
              0
            </DigitButton>
            <ClearEnterButton functionPassed={this.clearFunction}>
              Clear
            </ClearEnterButton>
            <ClearEnterButton functionPassed={this.calculateDerivative}>
              Enter
            </ClearEnterButton>
          </div>
          <Credits />
        </div>
      </div>
    );
  }
}

export default App;
