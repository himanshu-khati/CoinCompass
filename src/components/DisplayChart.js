import React from "react";
import ChartTools from "./ChartTools";
import HistoricalChart from "./HistoricalChart";
const DisplayChart = () => {
  return (
    <div className="flex flex-col border">
      <ChartTools />
      <HistoricalChart />
    </div>
  );
};

export default DisplayChart;
