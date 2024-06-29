import { useEffect, useState } from "react";
import { EXCHANGE_RATES_API } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setExchangeData } from "../../utils/exchangeSlice";

const useExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExchangeRates = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(EXCHANGE_RATES_API);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch exchange rates. Status: ${response.status}`
          );
        }
        const json = await response.json();
        const data = json.rates;
        if (data) {
          const ratesArray = Object.values(data);
          setExchangeRates(ratesArray);
          dispatch(setExchangeData(ratesArray));
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching exchange rates:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getExchangeRates();
  }, [dispatch]);

  return { exchangeRates, isLoading, error };
};

export default useExchangeRates;
