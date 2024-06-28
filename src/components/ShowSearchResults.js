import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addCoins } from "../utils/chartSlice";
import { addSearchData } from "../utils/searchSlice";

const ShowSearchResults = () => {
  // Retrieve search data from the Redux store
  const searchData = useSelector((store) => store.search.searchData);

  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle the selection of a coin from search results
  const handleCoinSelect = (coinId) => {
    // console.log("coinID: ", coinId);
    dispatch(addCoins(coinId));
  };

  // Function to handle refreshing the search results
  const handleRefresh = () => {
    dispatch(addSearchData(null));
  };

  return (
    <>
      {/* Header section with search results title and refresh icon */}
      <div className="py-3 sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-900 text-md font-semibold">
            Search Results By Market Cap
          </h2>
          <div onMouseDown={handleRefresh}>
            {/* Refresh icon */}
            <ArrowPathIcon className="h-5 w-5 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Display search results */}
      {searchData.map((data) => (
        <div
          key={data.id}
          className="my-2 py-4 border-b-2 cursor-pointer hover:border-b-2 hover:border-blue-400"
          onMouseDown={() => handleCoinSelect(data.id)}
        >
          <div className="flex justify-between items-center">
            {/* Coin thumbnail */}
            <img src={data.thumb} alt="" />

            {/* Coin name */}
            <p className="text-base font-semibold">{data.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowSearchResults;
