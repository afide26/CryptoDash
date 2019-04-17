import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import styled from "styled-components";
import CoinImage from "../Shared/CoinImage";

const SpotlightName = styled.h2`
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export default function() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <SpotlightName>
            Hello {coinList[currentFavorite].CoinName}
          </SpotlightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
