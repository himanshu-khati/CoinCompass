import React from "react";
import { useSelector } from "react-redux";
import millify from "millify";
const SideBar = () => {
  const coinList = useSelector((store) => store.app.coinList);
  const currency = useSelector((store) => store.app.currency);
  if (!coinList || !Array.isArray(coinList)) return <p>Loading...</p>;
  return (
    <div className="max-h-[871px] overflow-hidden overflow-y-scroll">
      <h2 className="lg:font-semibold lg:text-gray-700 text-lg">
        Cryptocurrency By Market Cap
      </h2>

      {coinList.map((data) => {
        return (
          <div key={data.id} className="my-2 border-b">
            <p className="text-base font-semibold">{data.name}</p>
            <p className="text-gray-400">
              {data.market_cap.toLocaleString("en-US", {
                style: "currency",
                currency: currency,
              })}
            </p>
            <span
              className={`text-green-600 ${
                data.price_change_percentage_24h >= 0
                  ? "text-green-700"
                  : "text-red-700"
              } `}
            >
              {data.price_change_percentage_24h >= 0 ? "+" : ""}
              {data.price_change_percentage_24h}
            </span>
          </div>
        );
      })}
      {/*
       */}
    </div>
  );
};

export default SideBar;
