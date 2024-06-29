import { useEffect, useState } from "react";
import { COIN_LIST_API } from "../../utils/constants";

const useCoinList = (currency) => {
  const [coinList, setCoinList] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCoinList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(COIN_LIST_API(currency));
        if (!response.ok) {
          setError(response.statusText);
          console.log(
            `Error fetching coinlist data. Status: ${response.status}`
          );
          return;
        }

        const json = await response.json();
        setCoinList(json);
        setError(null);
      } catch (error) {
        setError("Network Error");
      } finally {
        setIsLoading(false);
      }
    };
    getCoinList();
  }, [currency]);

  return { coinList, error, isLoading };
};

export default useCoinList;
