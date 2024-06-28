import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HISTORICAL_CHART } from "../../utils/constants";
import { addhistoricalChartData } from "../../utils/chartSlice";

const useHistoricalChart = () => {
  const dispatch = useDispatch();
  const coinIds = useSelector((store) => store.chart.coinId);
  const currency = useSelector((store) => store.app.currency);
  const days = parseInt(useSelector((store) => store.chart.days));
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const responses = await Promise.all(
        coinIds.map((id) =>
          fetch(HISTORICAL_CHART(id, currency, days)).then((res) => {
            if (!res.ok) throw new Error(`Failed to fetch data for ${id}`);
            return res.json();
          })
        )
      );
      setChartData(responses);
      dispatch(addhistoricalChartData(responses));
    } catch (err) {
      console.error("Error fetching historical chart data:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [coinIds, currency, days, dispatch]);

  useEffect(() => {
    if (coinIds && coinIds.length > 0) {
      fetchData();
    }
  }, [coinIds, fetchData]);

  return { isLoading, error, chartData };
};

export default useHistoricalChart;
