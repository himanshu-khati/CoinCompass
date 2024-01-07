import { useEffect, useState } from "react";
import { HISTORICAL_CHART } from "../../utils/constants";
const useHistoricalChart = (id, currency, days) => {
  const [chartData, setChartData] = useState(null);

  const getChartData = async () => {
    const response = await fetch(HISTORICAL_CHART(id, currency, days));
    const json = await response.json();
    setChartData(json);
  };

  useEffect(() => {
    getChartData();
  }, [id, currency, days]);
  return chartData;
};

export default useHistoricalChart;
