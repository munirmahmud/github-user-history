import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from 'react';
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const PieChart = ({ data }) => {
    const dataSource = {
        chart: {
          caption: "Languages",
          plottooltext: "Most used languases in " + new Date().getFullYear(),
          theme: "fusion",
          decimals: 0,
          pieRadius: '45%',
        },
        data
    };

    return (
        <ReactFusioncharts
          type="pie2d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      );
}

export default PieChart;
