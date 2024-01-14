import { useEffect, useState } from "react";
import { COIN_LIST_API } from "../../utils/constants";

const useCoinList = (currency) => {
  const [coinList, setCoinList] = useState(null);
  const [error, setError] = useState(null);

  const getCoinList = async () => {
    try {
      const response = await fetch(COIN_LIST_API(currency));

      if (!response.ok) {
        setError(response.status);
        console.error(
          `Error fetching coinlist data. Status: ${response.status}`
        );
        return;
      }

      const json = await response.json();
      setCoinList(json);
    } catch (error) {
      setError("Network error");
      console.error("Error fetching coinlist data: ", error);
    }
  };

  useEffect(() => {
    getCoinList();
  }, [currency]);

  return { coinList, error };
};

export default useCoinList;
