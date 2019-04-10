import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

const ConfirmButton = styled.button`
  margin: 20px auto;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1em;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: green;
  display: block;
  outline: none;
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => {
        return (
          <ConfirmButton onClick={confirmFavorites}>
            ConfirmFavorites
          </ConfirmButton>
        );
      }}
    </AppContext.Consumer>
  );
}
