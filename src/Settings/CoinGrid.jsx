import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin: 40px auto;
`;

function getCoinsToDisplay(coinList, topSection) {
  return Object.keys(coinList).slice(0, topSection ? 5 : 100);
}
export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection).map((coinKey, index) => {
            return (
              <CoinTile topSection={topSection} key={index} coinKey={coinKey} />
            );
          })}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
