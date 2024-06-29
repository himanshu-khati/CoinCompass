import React from "react";
import usePortfolioData from "./hooks/usePortfolioData";
import { Pie } from "react-chartjs-2";
import millify from "millify";
import { useSelector } from "react-redux";
import PieShimmer from "./shimmerUI/PieShimmer";
import ErrorModal from "./ErrorModal";

const PortfolioChart = () => {
  // Custom hook to fetch portfolio data
  const { error, isLoading } = usePortfolioData();

  // Retrieve portfolio data from the Redux store
  const coinData = useSelector((store) => store.chart.portfolioData);

  // Display shimmer effect while data is loading
  if (!coinData || isLoading) {
    return <PieShimmer />;
  }

  if (error) {
    return (
      <ErrorModal error={error} onClose={() => window.location.reload()} />
    );
  }

  // Extract labels and dataset data from portfolio data
  const labelData = coinData.map((data) => data.name);
  const datasetData = coinData.map((data) => data.market_cap);

  // Millify the datasetData for better readability
  const millifiedData = datasetData.map((value) => millify(value));

  return (
    <div className="h-56 w-full flex justify-center">
      {/* Render Pie chart */}
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
          // Configure tooltip customization using callbacks
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
          // Enable responsiveness and set maintainAspectRatio to false
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PortfolioChart;
