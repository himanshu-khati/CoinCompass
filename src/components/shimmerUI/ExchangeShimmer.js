import React from "react";
import { Spin } from "antd";

const ExchangeShimmer = () => {
  return (
      <div className="w-full lg:w-6/12 lg:mx-4 bg-white rounded-xl shadow my-2 lg:p-4 p-3">
    <Spin>
      <h2 className="text-gray-800 text-lg font-semibold">Exchange Coins</h2>
      <div className="flex flex-col gap-4 justify-center p-3">
        <div className="flex justify-between items-center">
          <p className="text-yellow-500 font-semibold text-base">Sell</p>
          <div className="w-36 h-10 border rounded-lg animate-pulse"></div>
          <div className="w-36 h-10 border rounded-lg animate-pulse"></div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-green-500 font-semibold text-base">Buy</p>
          <div className="w-36 h-10 border rounded-lg animate-pulse"></div>
          <div className="w-36 h-10 border-b  animate-pulse flex items-center justify-center">
            
          </div>
        </div>

      </div>
    </Spin>
    </div>
  );
};

export default ExchangeShimmer;
