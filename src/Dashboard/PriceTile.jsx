import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Settings/Styles";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";
import { AppContext } from "../App/AppProvider";
const numberFormat = number => {
  return +(number + "").slice(0, 7);
};

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;
const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: right;
      ${fontSize3};
    `}
  ${props =>
    props.currentFavorite &&
    css`
      color: green;
      pointer-events: none;
      ${greenBoxShadow}
    `}
`;

// Display the price
const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  );
}

function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>AUD {numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
}

function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled
      compact
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}
    >
      <JustifyLeft>{sym}</JustifyLeft>
      <ChangePercent data={data} />
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
}

export default function({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["AUD"];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <TileClass
          currentFavorite={currentFavorite === sym}
          sym={sym}
          data={data}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        />
      )}
    </AppContext.Consumer>
  );
}
