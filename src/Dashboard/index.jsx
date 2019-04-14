import React from "react";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";
export default function() {
  return (
    <Page name="dashboard">
      <h1>I'm Dashboard</h1>
      <PriceGrid />
    </Page>
  );
}
