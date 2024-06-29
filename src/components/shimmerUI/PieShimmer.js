import { Spin } from "antd";
import React from "react";
import { Pie } from "react-chartjs-2";
const PieShimmer = () => {
  return (
    <Spin>
      <div className="h-56 w-full flex justify-center animate-pulse">
        <Pie
          data={{
            labels: ["Loading", "Loading", "Loading"],
            datasets: [
              {
                label: "Loading Portfolio",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </Spin>
  );
};

export default PieShimmer;
