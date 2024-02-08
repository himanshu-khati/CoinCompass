import React from "react";
import useHistoricalChart from "./hooks/useHistoricalChart";
import date from "date-and-time";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

const HistoricalChart = () => {
  // Fetch historical chart data using custom hook
  const coinData = useHistoricalChart();

  // Retrieve chart-related information from Redux store
  const chartType = useSelector((store) => store.chart.chartType);
  const duration = useSelector((store) => store.chart.days);
  const coinId = useSelector((store) => store.chart.coinId);
  const currency = useSelector((store) => store.app.currency);

  // If data is not available, display loading message
  if (!coinData || !coinData.prices || !Array.isArray(coinData.prices)) {
    return <p>Loading</p>;
  }

  // Extract data for labels and dataset
  const { prices } = coinData;
  const labelData = prices.map((data) => {
    // Format timestamp based on the selected duration
    let weekPattern = date.compile("hh:mm A, DD MMM");
    let monthPattern = date.compile("D MMM YY ");
    let yearPattern = date.compile("MMM YY");
    let now = new Date(data[0]);
    let time = date.format(now, "hh:mm A");
    let week = date.format(now, weekPattern);
    let month = date.format(now, monthPattern);
    let year = date.format(now, yearPattern);
    if (duration === 1) {
      return time;
    } else if (duration === 7) {
      return week;
    } else if (duration === 30) {
      return month;
    } else {
      return year;
    }
  });
  const datasetData = prices.map((data) => data[1]);

  return (
    <div className="lg:px-4 lg:py-6 flex justify-center bg-white rounded-xl">
      {/* Render historical chart */}
      <Chart
        className="lg:h-[400px] h-[300px]"
        type={chartType}
        datasetIdKey="id"
        data={{
          labels: labelData,
          datasets: [
            {
              id: 1,
              label: `${coinId.toUpperCase()}`,
              data: datasetData,
              spanGaps: true,
              borderColor: "#00F300",
              backgroundColor: "#00F300",
              pointBorderColor: "transparent",
              pointBorderWidth: 2,
              pointRadius: 0,
            },
          ],
        }}
        options={{
          // Enable responsiveness and set maintainAspectRatio to false
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            // X-axis configuration
            x: {
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: "TIME",
                align: "center",
                padding: {
                  top: 10,
                },
              },
              maxTicksLimit: 10,
            },
            // Y-axis configuration
            y: {
              grid: {
                display: true,
              },
              title: {
                display: true,
                text: `${currency.toUpperCase()}`,
                align: "center",
              },
            },
          },
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default HistoricalChart;
