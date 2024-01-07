import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    currency: "inr",
    coinList: null,
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },

    setCoinList: (state, action) => {
      state.coinList = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setCurrency, setCoinList } = appSlice.actions;
