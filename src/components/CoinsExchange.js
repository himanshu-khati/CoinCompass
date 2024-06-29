import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSellCoinRate, setBuyCoinRate } from "../utils/exchangeSlice";
import useExchangeRates from "./hooks/useExchangeRates";
import ErrorModal from "./ErrorModal"; 
import ExchangeShimmer from "./shimmerUI/ExchangeShimmer";

const CoinsExchange = () => {
  // Custom hook to fetch exchange rates data
  const { isLoading, error } = useExchangeRates();

  // Redux state and dispatch function
  const dispatch = useDispatch();
  const { exchangeData, sellCoinRate, buyCoinRate } = useSelector(
    (store) => store.exchange
  );
  const [numberOfCoins, setNumberOfCoins] = useState(1);

  // Set default buy coin rate on component mount
  useEffect(() => {
    const setDefaultBuyCoinRate = () => {
      if (exchangeData && exchangeData.length > 0) {
        const defaultBuyCoinRate = exchangeData.find(
          (coin) => coin.name === "Ether"
        );
        if (defaultBuyCoinRate) {
          dispatch(setBuyCoinRate(defaultBuyCoinRate.value));
        }
      }
    };

    setDefaultBuyCoinRate();
  }, [exchangeData, dispatch]);

  // Handle rate change for buy or sell
  const handleRateChange = (e, setRateAction) => {
    const { value } = e.target;
    dispatch(setRateAction(value));
  };

  // Handle input value change
  const setValue = (e) => {
    setNumberOfCoins(e.target.value);
  };

  // Calculate output value based on sell rate, buy rate, and amount
  const calculateOutput = (sellRate, buyRate, amount) => {
    let result = (1 / sellRate) * amount * buyRate;
    return Math.round(result * 1000) / 1000;
  };

  // Render loading spinner while fetching data
  if (isLoading || !exchangeData) {
    return <ExchangeShimmer />;
  }

  return (
    // Exchange coins container
    <div className="w-full lg:w-6/12 lg:mx-4 bg-white rounded-xl shadow my-2 lg:p-4 p-3">
      <h2 className="text-gray-800 text-lg font-semibold">Exchange Coins</h2>

      {/* Render ErrorModal if error exists */}
      <ErrorModal error={error} />

      <div className="flex flex-col gap-4 justify-center">
        {/* Sell section */}
        <div className="flex justify-between p-3 items-center">
          <p className="text-yellow-500 font-semibold text-base">Sell</p>
          <select
            name="sell"
            onChange={(e) => handleRateChange(e, setSellCoinRate)}
            value={sellCoinRate || ""}
            className="w-36 h-10 p-2 outline-blue-500 border rounded-lg"
          >
            {exchangeData.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>

          <input
            type="number"
            id="numberOfCoins"
            value={numberOfCoins}
            onChange={setValue}
            className="w-36 h-10 px-2 outline-blue-500 border rounded-lg"
            placeholder="enter amount"
          />
        </div>

        {/* Buy section */}
        <div className="flex justify-between p-3 items-center">
          <p className="text-green-500 font-semibold text-base">Buy</p>
          <select
            name="buy"
            onChange={(e) => handleRateChange(e, setBuyCoinRate)}
            value={buyCoinRate || ""}
            className="w-36 h-10 p-2 outline-blue-500 border rounded-lg"
          >
            {exchangeData.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>
          <p className="w-36 h-10 px-2 flex items-center text-green-500  outline-blue-500 border-b">
            Value: {calculateOutput(sellCoinRate, buyCoinRate, numberOfCoins)}
          </p>
        </div>

        {/* Exchange button */}
        <div className="flex w-full justify-center items-center">
          <button className="bg-blue-700 px-5 py-2 rounded-lg w-full lg:w-28 text-white hover:bg-blue-500">
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinsExchange;
