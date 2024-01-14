import React from "react";
import usePortfolioData from "./hooks/usePortfolioData";
import { Pie } from "react-chartjs-2";
import millify from "millify";
import { useSelector } from "react-redux";
import PieShimmer from "./shimmerUI/PieShimmer";

const PortfolioChart = () => {
  usePortfolioData();
  const coinData = useSelector((store) => store.chart.portfolioData);

  if (!coinData || !Array.isArray(coinData)) {
    return <PieShimmer />;
  }

  const labelData = coinData.map((data) => data.name);
  const datasetData = coinData.map((data) => data.market_cap);

  // Millify the datasetData
  const millifiedData = datasetData.map((value) => millify(value));

  return (
    <div className="h-56 w-full flex justify-center">
      <Pie
        datasetIdKey="id"
        data={{
          labels: labelData,
          datasets: [
            {
              id: 1,
              label: "",
              data: datasetData,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              borderColor: ["white"],
              borderWidth: 0,
              hoverOffset: 10,
              hoverBorderWidth: 4,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  const value = millifiedData[context.dataIndex];
                  return `${label}: ${value}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PortfolioChart;
