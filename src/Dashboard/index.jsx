import React from "react";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import styled from "styled-components";

const ChartGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
  margin-top: 20px;
`;
export default function() {
  return (
    <Page name="dashboard">
      <h1>Click on any of the coins to set as favorite:</h1>
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <div>Chart Goes Here</div>
      </ChartGrid>
    </Page>
  );
}
