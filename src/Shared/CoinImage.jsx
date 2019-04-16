import React from "react";
import styled, { css } from "styled-components";

const CoinImage = styled.img`
  height: 50px;
  ${props =>
    props.spotlight &&
    css`
      height: 200px;
      display: block;
      margin: 5px auto;
    `}
`;
export default function({ coin, spotlight }) {
  return (
    <CoinImage
      spotlight={spotlight}
      alt={coin.CoinName}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
