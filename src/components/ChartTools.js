import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCoinList } from "../utils/appSlice";
import useCoinList from "./hooks/useCoinList";
import { addCoins } from "../utils/chartSlice";
const ChartTools = () => {
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.app.currency);
  const coinData = useCoinList(currency);

  useEffect(() => {
    dispatch(setCoinList(coinData));
  }, [coinData, dispatch]);

  if (!coinData) return <p>Loading....</p>;
  const handleSelectChange = (event) => {
    dispatch(addCoins(event.target.value));
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="buttons">buttons</div>
      <div className="coin-drop">
        <select name="" id="" onChange={handleSelectChange}>
          {coinData.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
      <div className="chart-type"></div>
    </div>
  );
};

export default ChartTools;
