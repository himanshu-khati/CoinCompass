import { Spin } from "antd";
import React, { useEffect } from "react";
import {
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

const SidebarShimmer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dummyItems = new Array(8).fill(0);

  return (
    <Spin>
      <div className="lg:max-h-[860px] overflow-hidden hide-scroll overflow-y-scroll">
        <div className="py-3 sticky top-0 z-50 bg-white">
          <h2 className="text-gray-900 text-md font-semibold">
          Cryptocurrency By Market Cap
          </h2>
        </div>
        {dummyItems.map((_, index) => (
          <div
            key={index}
            className="my-2 py-4 border-b-2 hover:border-blue-400"
          >
            <div className="flex justify-between items-center animate-pulse">
              <div className="bg-gray-300 h-5 w-3/5 rounded"></div>
              <div className="flex gap-1 items-center">
                <ArrowTrendingUpIcon className="h-5 w-5 text-gray-300" />
                <div className="bg-gray-300 h-5 w-10 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-300 h-5 w-1/4 mt-2 rounded"></div>
          </div>
        ))}
      </div>
    </Spin>
  );
};

export default SidebarShimmer;
