import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin: 40px auto;
`;

function getCoinsToDisplay(coinList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}
export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites).map(
            (coinKey, index) => {
              return (
                <CoinTile
                  topSection={topSection}
                  key={index}
                  coinKey={coinKey}
                />
              );
            }
          )}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
