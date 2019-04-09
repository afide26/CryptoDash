import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Welcome from "./WelcomeMessage";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
