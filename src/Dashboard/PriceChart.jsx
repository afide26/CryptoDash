import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import highChartsConfig from "./HighChartsConfig";
import HighChartsTheme from "./HighChartsTheme";
ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {() => (
        <Tile>
          <ReactHighCharts config={highChartsConfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
