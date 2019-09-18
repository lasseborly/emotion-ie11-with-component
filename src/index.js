import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import "./styles.css";

const TestHeader = styled.div({
  color: "violet"
});

const TestHeaderIE = TestHeader.withComponent("h1");

function App() {
  return (
    <div className="App">
      <TestHeader>Working in IE11</TestHeader>
      <TestHeaderIE>Not working in IE11</TestHeaderIE>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
