import React from "react";
import { useSelector } from "react-redux";
import PortfolioChart from "./PortfolioChart";
const Portfolio = () => {
  const currency = useSelector((store) => store.app.currency);
  return (
    <div className="shadow w-6/12 mx-4 bg-white rounded-xl my-2 p-4">
      <div className="flex justify-between">
        <h2 className="text-lg  font-semibold">Portfolio</h2>
        <p className="text-lg font-semibold text-gray-600">
          Total Value{" "}
          <span className="text-gray-900 text-lg font-semibold"> 1000 {currency.toUpperCase()}</span>{" "}
        </p>
      </div>

      <div>
        <PortfolioChart />
      </div>
    </div>
  );
};

export default Portfolio;
