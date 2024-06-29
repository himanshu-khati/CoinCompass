import { useEffect, useState } from "react";
import { PORTFOLIO_API } from "../../utils/constants";
import { addPortfolioData } from "../../utils/chartSlice";
import { useDispatch, useSelector } from "react-redux";

const usePortfolioData = () => {
  const currency = useSelector((store) => store.app.currency);
  const dispatch = useDispatch();
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPortfolioData = async () => {
    setIsLoading(true);
    setError(null); // Reset error state before attempting to fetch data

    try {
      const response = await fetch(PORTFOLIO_API(currency));
      if (!response.ok) {
        throw new Error("Failed to fetch portfolio data"); // Handle HTTP errors
      }
      const json = await response.json();
      setPortfolioData(json);
      dispatch(addPortfolioData(json));
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, [currency]);

  return { portfolioData, isLoading, error };
};

export default usePortfolioData;
