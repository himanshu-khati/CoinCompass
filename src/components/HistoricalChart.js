import React from "react";
import useHistoricalChart from "./hooks/useHistoricalChart";
import date from "date-and-time";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

const HistoricalChart = () => {
  const coinData = useHistoricalChart();
  const chartType = useSelector((store) => store.chart.chartType);
  const duration = useSelector((store) => store.chart.days);
  const coinId = useSelector((store) => store.chart.coinId);
  const currency = useSelector((store) => store.app.currency);

  if (!coinData || !coinData.prices || !Array.isArray(coinData.prices)) {
    return <p>Loading</p>;
  }
  const { prices } = coinData;

  const labelData = prices.map((data) => {
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
    <div className=" px-4 py-6  bg-white rounded-xl ">
      <Chart
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
          scales: {
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
