import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import React from "react";
import { default as ReactFC, default as ReactFusioncharts } from "react-fusioncharts";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Stars Per Language",
      subcaption: "The languages got starts in " + new Date().getFullYear(),
      showpercentvalues: "0",
      defaultcenterlabel: "Got Stars",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      theme: "candy",
      doughnutRadius: '45%',
    },

    data
  };

  return (
    <ReactFusioncharts
      type="doughnut2d"
      width="100%"
      height="100%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Doughnut;

