import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoins,
  setChartType,
  setDays,
  removeCoin,
} from "../utils/chartSlice";
import { setCoinList } from "../utils/appSlice";
import { Select } from "antd";
import useCoinList from "./hooks/useCoinList";
import { DURATION_BUTTONS } from "../utils/constants";
import DurationButton from "./DurationButton";
import ErrorModal from "./ErrorModal";
const { Option } = Select;

const ChartTools = () => {
  // Redux state and dispatch function
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.app.currency);
  const selectedCoinIds = useSelector((store) => store.chart.coinId);
  const { coinList, error } = useCoinList(currency);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [optionsSelected, setOptionsSelected] = useState([]);

  // Update coin list in the Redux store and show error modal if any
  useEffect(() => {
    dispatch(setCoinList(coinList));
    if (error) {
      setIsErrorModalVisible(true);
    }
  }, [coinList, dispatch, error]);

  // Handle coin selection change with MultiSelect
  const handleChange = (value) => {
    setOptionsSelected(value);
    dispatch(addCoins(value));
  };

  // Handle coin selection removal
  const handleDeselect = (value) => {
    dispatch(removeCoin(value));
  };

  // Handle chart type selection change
  const handleChartChange = (value) => {
    dispatch(setChartType(value));
  };

  // Handle duration selection change
  const handleSelectDays = (e) => {
    const days = parseInt(e.target.value);
    dispatch(setDays(days));
  };

  return (
    <div className="flex bg-white justify-center lg:p-2 items-center lg:pt-4 rounded-t-xl sm:flex-row sm:gap-4 flex-col gap-2 py-2">
      {isErrorModalVisible && <ErrorModal error={error} />}
      {/* Duration buttons */}
      <div className="buttons flex lg:order-none order-2 ">
        {DURATION_BUTTONS.map((data) => (
          <div key={data.value} onMouseDown={handleSelectDays}>
            <DurationButton duration={data.value} title={data.title} />
          </div>
        ))}
      </div>
      {/* Coin selection and chart type dropdowns */}
      <div className="flex flex-row gap-2 lg:order-none order-1">
        {/* Coin selection dropdown with MultiSelect */}
        <div className="coin-dropdown">
          <Select
            mode="multiple"
            className="w-full sm:w-64"
            placeholder="Select coins"
            defaultValue={selectedCoinIds}
            onChange={handleChange}
            onDeselect={handleDeselect}
            placement="bottomRight"
          >
            {coinList?.map((coin) => (
              <Option
                key={coin.id}
                value={coin.id}
                disabled={
                  optionsSelected?.length === 2
                    ? optionsSelected.includes(coin.id)
                      ? false
                      : true
                    : false
                }
              >
                {coin.name}
              </Option>
            ))}
          </Select>
        </div>
        {/* Chart type selection dropdown */}
        <div className="chart-type">
          <Select
            onChange={handleChartChange}
            style={{ width: "6.25rem" }}
            defaultValue={"line"}
          >
            <Option value="line">Line</Option>
            <Option value="bar">Bar</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ChartTools;
