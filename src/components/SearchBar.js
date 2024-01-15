import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../utils/appSlice";
import { COIN_SEARCH_API } from "../utils/constants";
import {
  addSearchString,
  setDisplaySearch,
  addSearchData,
} from "../utils/searchSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const handleCurrencySelect = (event) => {
    dispatch(setCurrency(event.target.value));
  };
  const [error, setError] = useState(null);

  const [searchString, setSerachString] = useState("");
  console.log(searchString);
  const getSearchResults = async () => {
    try {
      const response = await fetch(COIN_SEARCH_API(searchString));
      if (!response.ok) {
        setError(response.status);
        console.log(`Error Fetchinig Search Results: ${response.status}`);
        return;
      }
      const json = await response.json();
      setError(null);
      dispatch(addSearchData(json.coins));
    } catch (error) {
      setError("Network Error");
      console.log(error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addSearchString(searchString));
    dispatch(setDisplaySearch(true));
    getSearchResults();
  };

  return (
    <div className="flex justify-between  my-2 rounded-xl px-4 py-2 items-center gap-3 ">
      <div>
        <select
          name=""
          id=""
          className=" px-4 py-2 rounded-lg outline-blue-500 border bg-white "
          onChange={handleCurrencySelect}
        >
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
      </div>
      <div>
        <form action="" className="flex w-full " onSubmit={handleFormSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by coin"
            className="border p-2 rounded-s-lg px-4  outline-blue-500 w-[660px] "
            onChange={(e) => setSerachString(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="border px-4 rounded-e-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
