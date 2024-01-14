import { useEffect, useState } from "react";
import { HISTORICAL_CHART } from "../../utils/constants";
import { addhistoricalChartData } from "../../utils/chartSlice";
import { useDispatch, useSelector } from "react-redux";
const useHistoricalChart = () => {
  const [chartData, setChartData] = useState(null);
  const dispatch = useDispatch();
  const id = useSelector((store) => store.chart.coinId);
  const currency = useSelector((store) => store.app.currency);
  const days = parseInt(useSelector((store) => store.chart.days));

  const fetchData = async () => {
    try {
      const response = await fetch(HISTORICAL_CHART(id, currency, days));
      const data = await response.json();
      setChartData(data);
      dispatch(addhistoricalChartData(chartData));
    } catch (error) {
      console.error("Error fetching historical chart data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, currency, days]);

  return chartData;
};

export default useHistoricalChart;
