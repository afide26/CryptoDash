import React from "react";
import { AppContext } from "../App/AppProvider";

export default function({ coinList, children }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return (
            <div>
              <h1>Loading coins...</h1>
            </div>
          );
        }
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
}
