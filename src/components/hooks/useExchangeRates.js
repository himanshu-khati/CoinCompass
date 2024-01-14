import { useEffect, useState } from "react";
import { EXCHANGE_RATES_API } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setExchangeData } from "../../utils/exchangeSlice";

const useExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const dispatch = useDispatch();

  const getExchangeRates = async () => {
    try {
      const response = await fetch(EXCHANGE_RATES_API);
      const json = await response.json();
      const data = json.rates;

      if (data) {
        const ratesArray = Object.values(data);
        setExchangeRates(ratesArray);
        dispatch(setExchangeData(ratesArray));
      }
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  useEffect(() => {
    getExchangeRates();
  }, []);

  return exchangeRates;
};

export default useExchangeRates;
