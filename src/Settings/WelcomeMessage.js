import React from "react";
import { AppContext } from "../App/AppProvider";

export default function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit, favorites }) => {
        return firstVisit ? (
          favorites.length > 0 ? (
            <div>
              <h1>Continue saving coins</h1>
            </div>
          ) : (
            <div>
              <h1>
                Welcome to CryptoDash, select your favorite coins to begin.
              </h1>
            </div>
          )
        ) : (
          <h1>Welcome back to CryptoDash.</h1>
        );
      }}
    </AppContext.Consumer>
  );
}
