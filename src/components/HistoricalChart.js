import React from "react";
import useHistoricalChart from "./hooks/useHistoricalChart";
import date from "date-and-time";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ErrorModal from "./ErrorModal";
import HistoricalChartShimmer from "./shimmerUI/HistoricalChartShimmer";

const HistoricalChart = () => {
  // Fetch historical chart data using custom hook
  const { isLoading, error } = useHistoricalChart();

  // Retrieve chart-related information from Redux store
  const chartType = useSelector((store) => store.chart.chartType);
  const duration = useSelector((store) => store.chart.days);
  const coinId = useSelector((store) => store.chart.coinId);
  const currency = useSelector((store) => store.app.currency);
  const colors = ["#007BFF", "#28a745"];
  const historicalChartData = useSelector(
    (store) => store.chart.historicalChartData
  );

  // Display loading or error message
  if (isLoading || !historicalChartData) {
    return <HistoricalChartShimmer />;
  }
  if (error) {
    return (
      <ErrorModal
        error={error.message}
        onClose={() => window.location.reload()}
      />
    );
  }
  const datasets = historicalChartData.map((data, index) => ({
    id: index,
    label: coinId[index]?.toUpperCase(), // Label each dataset by coin
    data: data.prices.map((price) => price[1]), // Use the price data
    spanGaps: true,
    borderColor: colors[index % colors.length],
    backgroundColor: colors[index % colors.length],
    pointBorderColor: "transparent",
    pointBorderWidth: 2,
    pointRadius: 1,
    pointHoverRadius: 1,
    fill: false,
    tension: 0,
    cubicInterpolationMode: "monotone",
  }));

  const labelData = historicalChartData[0].prices.map((price) => {
    let format;
    switch (duration) {
      case 1:
        format = "hh:mm A";
        break;
      case 7:
        format = "hh:mm A, DD MMM";
        break;
      case 30:
        format = "D MMM YY";
        break;
      default:
        format = "MMM YY";
    }
    let pattern = date.compile(format);
    return date.format(new Date(price[0]), pattern);
  });

  return (
    <div className="lg:px-4 lg:py-6 flex justify-center bg-white rounded-xl">
      <Chart
        className="lg:h-[400px] h-[300px]"
        type={chartType}
        datasetIdKey="id"
        data={{
          labels: labelData,
          datasets: datasets,
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              title: {
                display: true,
                text: "TIME",
                align: "center",
                padding: { top: 10 },
              },
              maxTicksLimit: 10,
            },
            y: {
              grid: { display: true },
              title: {
                display: true,
                text: `${currency.toUpperCase()}`,
                align: "center",
              },
            },
          },
          elements: { point: { radius: 1 } },
        }}
      />
    </div>
  );
};

export default HistoricalChart;
