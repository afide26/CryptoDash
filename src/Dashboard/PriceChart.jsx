import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import highChartsConfig from "./HighChartsConfig";
import HighChartsTheme from "./HighChartsTheme";
import ChartSelect from "./ChartSelect";
import { fontSize1 } from "../Settings/Styles";
import styled from "styled-components";
ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

const LoadingDataMessage = styled.div`
  ${fontSize1}
`;
export default function() {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue={"months"}
            onChange={e => changeChartSelect(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartSelect>
          {historical ? (
            <ReactHighCharts config={highChartsConfig(historical)} />
          ) : (
            <LoadingDataMessage>Loading historical data...</LoadingDataMessage>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
