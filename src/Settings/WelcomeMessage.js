import React from "react";
import { AppContext } from "../App/AppProvider";

export default function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => {
        return firstVisit ? (
          <div>
            <h1>Welcome to CryptoDash, select your favorite coins to begin.</h1>
          </div>
        ) : (
          <h1>Add up to 10 coins in your collection</h1>
        );
      }}
    </AppContext.Consumer>
  );
}
