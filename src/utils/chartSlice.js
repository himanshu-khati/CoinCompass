import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    chartType: "line",
    coinId: ["bitcoin"],
    days: 1,
    historicalChartData: null,
    portfolioData: null,
  },
  reducers: {
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
    addCoins: (state, action) => {
      state.coinId = action.payload;
      // state.coinId = [action.payload];
    },
    removeCoin: (state, action) => {
      state.coinId = state.coinId.filter((id) => id !== action.payload);
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
    addPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    addhistoricalChartData: (state, action) => {
      state.historicalChartData = action.payload;
    },
  },
});

export const {
  setChartType,
  addCoins,
  removeCoin,
  setDays,
  addPortfolioData,
  addhistoricalChartData,
} = chartSlice.actions;
export default chartSlice.reducer;
