import React from "react";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";
export default function() {
  return (
    <Page name="dashboard">
      <h1>Click on any of the coins to set as favorite:</h1>
      <PriceGrid />
    </Page>
  );
}
