import { useEffect, useMemo, useState } from "react";
import { COIN_LIST_API } from "../../utils/constants";

const useCoinList = (currency) => {
  const [coinList, setCoinList] = useState(null);
  const getCoinList = async () => {
    try {
      const response = await fetch(COIN_LIST_API(currency));
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status} `);
      }
      const json = await response.json();
      setCoinList(json);
    } catch (error) {
      console.error("error fetchind data: ", error);
    }
  };
  useEffect(() => {
    getCoinList();
  }, [currency]);
  const memoizedCoinList = useMemo(() => coinList, [coinList]);
  return memoizedCoinList;
};

export default useCoinList;
