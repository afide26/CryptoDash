import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { fontSize1, greenBoxShadow, fontColorGreen } from "./Styles";
const ConfirmButton = styled.button`
  margin: 20px auto;
  background: none;
  ${fontColorGreen}
  display: block;
  margin: 0 auto;
  ${fontSize1}
  &:hover {
    ${greenBoxShadow}
  }
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
            Save Your Favorite Coins
          </ConfirmButton>
        );
      }}
    </AppContext.Consumer>
  );
}
