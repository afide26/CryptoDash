import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from "../Settings";
import ConfirmButton from "../Settings/ConfirmButton";
import { AppProvider } from "./AppProvider";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
          <ConfirmButton />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
