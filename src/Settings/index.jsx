import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import Grid from "./Grid";

export default function() {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
      <Grid />
    </Page>
  );
}
