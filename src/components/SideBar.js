import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { addCoins } from "../utils/chartSlice";
import SidebarShimmer from "./shimmerUI/SidebarShimmer";

const SideBar = () => {
  const dispatch = useDispatch();
  const coinList = useSelector((store) => store.app.coinList);
  const currency = useSelector((store) => store.app.currency);
  const handleCoinSelect = (coinId) => {
    dispatch(addCoins(coinId));
  };
  if (!coinList || !Array.isArray(coinList)) return <SidebarShimmer />;

  return (
    <div className="max-h-[860px]  overflow-hidden hide-scroll overflow-y-scroll">
      <div className="py-3   sticky top-0 z-50 bg-white ">
        <h2 className="text-gray-900 text-md font-semibold">
          Cryptocurrency By Market Cap
        </h2>
      </div>
      {coinList.map((data) => {
        return (
          <div
            key={data.id}
            className="my-2 py-4 border-b-2  cursor-pointer hover:border-b-2 hover:border-blue-400 "
            onMouseDown={() => handleCoinSelect(data.id)}
          >
            <div className="flex justify-between items-center">
              <p className="text-base font-semibold">{data.name}</p>
              <div
                className={`text-green-600 flex gap-1 items-center ${
                  data.price_change_percentage_24h >= 0
                    ? "text-green-700"
                    : "text-red-700"
                } `}
              >
                {data.price_change_percentage_24h >= 0 ? (
                  <ArrowTrendingUpIcon className="h-5 w-5" />
                ) : (
                  <ArrowTrendingDownIcon className="h-5 w-5" />
                )}
                <p>
                  {Math.round(data.price_change_percentage_24h * 100) / 100} %
                </p>
              </div>
            </div>

            <p className="text-gray-400">
              {data.market_cap.toLocaleString("en-US", {
                style: "currency",
                currency: currency,
              })}
            </p>
          </div>
        );
      })}
      {/*
       */}
    </div>
  );
};

export default SideBar;
