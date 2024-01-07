import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../utils/appSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const handleCurrencySelect = (event) => {
    dispatch(setCurrency(event.target.value));
  };

  const [searchString, setSerachString] = useState("");
  console.log(searchString);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex border items-center gap-3 ">
      <div>
        <select
          name=""
          id=""
          className="border p-2"
          onChange={handleCurrencySelect}
        >
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
      </div>
      <div>
        <form action="" className="flex" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="search here"
            className="border p-2 "
            onChange={(e) => setSerachString(e.target.value)}
          />
          <input type="submit" value="Search" className="border px-2" />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
