import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    chartType: "line",
    coinId: ["bitcoin"],
    days: 1,
  },
  reducers: {
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
    addCoins: (state, action) => {
      if (!state.coinId.includes(action.payload)) {
        state.coinId.push(action.payload);
      }
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
  },
});

export const { setChartType, addCoins, setDays } = chartSlice.actions;
export default chartSlice.reducer;
