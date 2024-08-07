import React from "react";
import ChartTools from "./ChartTools";
import HistoricalChart from "./HistoricalChart";
const DisplayChart = () => {
  return (
    <div className="flex flex-col  shadow rounded-lg my-2 lg:mx-4 ">
      <ChartTools />
      <HistoricalChart />
    </div>
  );
};

export default DisplayChart;
