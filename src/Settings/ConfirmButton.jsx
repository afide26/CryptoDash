import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { fontSize1, greenBoxShadow, color3 } from "./Styles";
const ConfirmButton = styled.button`
  font-family:'Do Hyeon', sans-serif;
  margin: 20px;
  border:0;
  background:transparent;
  color:${color3}
  padding:8px;
  border-radius:10px;
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
          <CenterDiv>
            <ConfirmButton onClick={confirmFavorites}>
              Save Your Favorite Coins
            </ConfirmButton>
          </CenterDiv>
        );
      }}
    </AppContext.Consumer>
  );
}
