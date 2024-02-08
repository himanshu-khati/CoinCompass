import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../utils/appSlice";
import useSearchData from "./hooks/useSearchData";
import { addSearchString, addSearchData } from "../utils/searchSlice";

const SearchBar = () => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Custom hook to fetch search results
  const { getSearchResults, error } = useSearchData();

  // Function to handle currency selection
  const handleCurrencySelect = (event) => {
    dispatch(setCurrency(event.target.value));
  };

  // State to manage the search string input
  const [searchString, setSerachString] = useState("");

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Dispatch action to store the search string
    dispatch(addSearchString(searchString));

    // Fetch search results and dispatch action to store the results
    const data = await getSearchResults(searchString);
    dispatch(addSearchData(data));

    // Clear the search string input
    setSerachString("");
  };

  return (
    <div className="flex justify-between my-2 rounded-xl p-1 sm:px-4 sm:py-2 items-center gap-2 sm:gap-3">
      {/* Currency selection dropdown */}
      <div>
        <select
          name=""
          id=""
          className="px-2 py-2 sm:px-4 sm:py-2 rounded-lg outline-blue-500 border bg-white"
          onChange={handleCurrencySelect}
        >
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
      </div>

      {/* Search form */}
      <div>
        <form action="" className="flex w-full" onSubmit={handleFormSubmit}>
          {/* Search input */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by coin"
            className="border p-2 sm:p-2 rounded-s-lg sm:px-4 outline-blue-500 w-full sm:w-[500px] lg:w-[660px]"
            onChange={(e) => setSerachString(e.target.value)}
            value={searchString}
          />

          {/* Search button */}
          <input
            type="submit"
            value="Search"
            className="bg-blue-700 text-white sm:px-4 px-2 rounded-e-lg cursor-pointer hover:bg-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
