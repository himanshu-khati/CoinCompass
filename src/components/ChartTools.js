import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoins, setChartType, setDays } from "../utils/chartSlice";
import { setCoinList } from "../utils/appSlice";
import useCoinList from "./hooks/useCoinList";
import { DURATION_BUTTONS } from "../utils/constants";
import DurationButton from "./DurationButton";
const ChartTools = () => {
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.app.currency);
  const coinData = useCoinList(currency);

  useEffect(() => {
    dispatch(setCoinList(coinData));
  }, [coinData, dispatch]);

  const handleSelectChange = (event) => {
    dispatch(addCoins(event.target.value));
  };

  const handleChartChange = (e) => {
    dispatch(setChartType(e.target.value));
  };
  const handleSelectDays = (e) => {
    const days = parseInt(e.target.value);
    dispatch(setDays(days));
  };
  return (
    <div className="flex bg-white justify-center p-2 items-center pt-4  rounded-t-xl flex-row gap-4">
      <div className="buttons flex">
        {DURATION_BUTTONS.map((data) => (
          <div key={data.value} onMouseDown={handleSelectDays}>
            <DurationButton duration={data.value} title={data.title} />
          </div>
        ))}
      </div>
      <div className="coin-dropdown">
        {Array.isArray(coinData) ? (
          <select
            name=""
            id=""
            onChange={handleSelectChange}
            className="py-1 px-3 rounded-lg outline-blue-500 bg-[#FAFBFF] border"
          >
            {coinData.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        ) : (
          <select
            className="py-1 px-3 rounded-lg outline-blue-500 bg-[#FAFBFF] border animate-pulse "
            disabled
            defaultValue="loading"
          >
            <option disabled value="loading">
              Loading...
            </option>
          </select>
        )}
      </div>
      <div className="chart-type">
        <select
          name=""
          id=""
          onChange={handleChartChange}
          className="py-1 px-3 rounded-lg outline-blue-500 bg-[#FAFBFF] border"
        >
          <option value="line">Line</option>
          <option value="bar">Bar</option>
        </select>
      </div>
    </div>
  );
};

export default ChartTools;
