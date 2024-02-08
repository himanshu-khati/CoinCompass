import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoins, setChartType, setDays } from "../utils/chartSlice";
import { setCoinList } from "../utils/appSlice";
import useCoinList from "./hooks/useCoinList";
import { DURATION_BUTTONS } from "../utils/constants";
import DurationButton from "./DurationButton";
import ErrorModal from "./ErrorModal";

const ChartTools = () => {
  // Redux state and dispatch function
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.app.currency);
  const { coinList, error } = useCoinList(currency);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  // Update coin list in the Redux store and show error modal if any
  useEffect(() => {
    dispatch(setCoinList(coinList));
    if (error) {
      setIsErrorModalVisible(true);
    }
  }, [coinList, dispatch, error]);

  // Handle coin selection change
  const handleSelectChange = (event) => {
    dispatch(addCoins(event.target.value));
  };

  // Handle chart type selection change
  const handleChartChange = (e) => {
    dispatch(setChartType(e.target.value));
  };

  // Handle duration selection change
  const handleSelectDays = (e) => {
    const days = parseInt(e.target.value);
    dispatch(setDays(days));
  };

  return (
    // Container for chart tools and controls
    <div className="flex bg-white justify-center lg:p-2 items-center lg:pt-4 rounded-t-xl sm:flex-row sm:gap-4 flex-col gap-2 py-2">
      {isErrorModalVisible && <ErrorModal error={error} />}
      {/* Duration buttons */}
      <div className="buttons flex lg:order-none order-2">
        {DURATION_BUTTONS.map((data) => (
          <div key={data.value} onMouseDown={handleSelectDays}>
            <DurationButton duration={data.value} title={data.title} />
          </div>
        ))}
      </div>
      {/* Coin selection and chart type dropdowns */}
      <div className="flex flex-row gap-2 lg:order-none order-1">
        {/* Coin selection dropdown */}
        <div className="coin-dropdown">
          <select
            name=""
            id=""
            onChange={handleSelectChange}
            className="py-1 px-3 rounded-lg outline-blue-500 bg-[#FAFBFF] border"
          >
            {Array.isArray(coinList) ? (
              coinList.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))
            ) : (
              <option disabled value="loading">
                Loading...
              </option>
            )}
          </select>
        </div>
        {/* Chart type selection dropdown */}
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
    </div>
  );
};

export default ChartTools;
