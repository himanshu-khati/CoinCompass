import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { addCoins } from "../utils/chartSlice";
import SidebarShimmer from "./shimmerUI/SidebarShimmer";
import ShowSearchResults from "./ShowSearchResults";

// SideBar will show cryptocurrency by market cap and search results
const SideBar = () => {
  const dispatch = useDispatch();
  const coinList = useSelector((store) => store.app.coinList);
  const currency = useSelector((store) => store.app.currency);
  const searchData = useSelector((store) => store.search.searchData);
  const [coin, setCoin] = useState([]);

  // Function to handle coin selection
  const handleCoinSelect = (coinId) => {
    setCoin([coinId]);
  };
  useEffect(() => {
    if (coin.length > 0) {
      dispatch(addCoins(coin));
    }
  }, [coin, dispatch]);

  // Render shimmer effect while data is loading
  if (!coinList || !Array.isArray(coinList)) return <SidebarShimmer />;

  return (
    <div className="lg:max-h-[860px] overflow-hidden hide-scroll overflow-y-scroll">
      {/* Render search results if searchData is available, otherwise render the coin list */}
      {searchData ? (
        <ShowSearchResults />
      ) : (
        <div>
          {/* Header section */}
          <div className="py-3 sticky top-0 z-50 bg-white">
            <h2 className="text-gray-900 text-md font-semibold">
              Cryptocurrency By Market Cap
            </h2>
          </div>

          {/* Coin list */}
          {coinList.map((data) => (
            <div
              key={data.id}
              className="my-2 py-4 border-b-2 cursor-pointer hover:border-b-2 hover:border-blue-400"
              onMouseDown={() => handleCoinSelect(data.id)}
            >
              {/* Coin details */}
              <div className="flex justify-between items-center">
                <p className="text-base font-semibold">{data.name}</p>
                <div
                  className={`text-green-600 flex gap-1 items-center ${
                    data.price_change_percentage_24h >= 0
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {/* Trending up or down icon based on price change */}
                  {data.price_change_percentage_24h >= 0 ? (
                    <ArrowTrendingUpIcon className="h-5 w-5" />
                  ) : (
                    <ArrowTrendingDownIcon className="h-5 w-5" />
                  )}
                  {/* Display percentage change */}
                  <p>
                    {Math.round(data.price_change_percentage_24h * 100) / 100} %
                  </p>
                </div>
              </div>

              {/* Display market cap */}
              <p className="text-gray-400">
                {data.market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: currency,
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
