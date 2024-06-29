import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DummyGraph = () => {
  // Static data for the dummy chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sample Data 1",
        data: [33, 53, 85, 41, 44, 65],
        borderColor: "#007BFF",
        backgroundColor: "#007BFF",
        fill: false,
      },
      {
        label: "Sample Data 2",
        data: [33, 25, 35, 51, 54, 76],
        borderColor: "#28a745",
        backgroundColor: "#28a745",
        fill: false,
      },
    ],
  };

  // Options for the dummy chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Month",
          align: "center",
          padding: { top: 10 },
        },
      },
      y: {
        grid: {
          display: true,
        },
        title: {
          display: true,
          text: "Value",
          align: "center",
        },
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <div className="lg:px-4 lg:py-6 flex justify-center bg-white rounded-xl h-[400px]">
      <Chart
        className="lg:h-[400px] h-[300px]"
        type="line" // You can change this type to 'bar', 'line', etc.
        data={data}
        options={options}
      />
    </div>
  );
};

export default DummyGraph;
