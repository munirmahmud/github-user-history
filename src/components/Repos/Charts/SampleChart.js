import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import React from "react";
import ReactFC from "react-fusioncharts";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const SampleChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
        chart: {
          caption: "Languages",
          subCaption: "Most used languases in " + new Date().getFullYear(),
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "%",
          theme: "fusion"
        },
        // Chart Data
        data
    }
  };
    return (<ReactFC {...chartConfigs} />);
}

export default SampleChart;