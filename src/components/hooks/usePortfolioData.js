import { useEffect, useState } from "react";
import { PORTFOLIO_API } from "../../utils/constants";
import { addPortfolioData } from "../../utils/chartSlice";
import { useDispatch, useSelector } from "react-redux";
const usePortfolioData = () => {
  const currency = useSelector((store) => store.app.currency);
  const dispatch = useDispatch();
  const [portfolioData, setPortfolioData] = useState(null);
  const getPortfolioData = async () => {
    const response = await fetch(PORTFOLIO_API(currency));
    const json = await response.json();
    setPortfolioData(json);
    dispatch(addPortfolioData(json));
  };
  useEffect(() => {
    getPortfolioData();
  }, [currency]);
  return portfolioData;
};

export default usePortfolioData;
