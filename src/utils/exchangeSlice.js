import { createSlice } from "@reduxjs/toolkit";

const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    sellCoinRate: 1,
    buyCoinRate: null,
    exchangeData: null,
  },
  reducers: {
    setSellCoinRate: (state, action) => {
      state.sellCoinRate = action.payload;
    },
    setBuyCoinRate: (state, action) => {
      state.buyCoinRate = action.payload;
    },
    setExchangeData: (state, action) => {
      state.exchangeData = action.payload;
    },
  },
});
export const { setSellCoinRate, setBuyCoinRate, setExchangeData } =
  exchangeSlice.actions;
export default exchangeSlice.reducer;
