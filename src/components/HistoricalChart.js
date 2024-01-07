import React from "react";
import useHistoricalChart from "./hooks/useHistoricalChart";
import date from "date-and-time";
import { Line } from "react-chartjs-2";
import { Line as LineJS } from "chart.js/auto";
import { useSelector } from "react-redux";
const HistoricalChart = () => {
  const coinId = useSelector((store) => store.chart.coinId);
  const duration = useSelector((store) => store.chart.days);
  const currency = useSelector((store) => store.app.currency);
  const coinData = useHistoricalChart(coinId, currency, duration);
  if (!coinData) return <p>Loading</p>;
  const { prices } = coinData;

  const labelData = prices.map((data) => {
    let now = new Date(data[0]);
    let time = date.format(now, "hh:mm A");

    return duration === 1 ? time : now;
  });
  const datasetData = prices.map((data) => data[1]);

  return (
    <div>
      <Line
        datasetIdKey="id"
        data={{
          labels: labelData,
          datasets: [
            {
              id: 1,
              label: "",
              data: datasetData,
            },
          ],
        }}
      />
    </div>
  );
};

export default HistoricalChart;
