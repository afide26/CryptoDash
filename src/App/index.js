import React, { Component } from "react";
import "./App.css";
import styled, { css } from "styled-components";

import Welcome from "./WelcomeMessage";

const MyButton = styled.div`
  color: green;

  ${props =>
    props.red &&
    css`
      color: palevioletred;
    `}
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <MyButton>Green</MyButton>
        <MyButton red>PalevioletRed</MyButton>
      </div>
    );
  }
}

export default App;
