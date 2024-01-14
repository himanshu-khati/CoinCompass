import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    currency: "inr",
    coinList: null,
    error: null,
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },

    setCoinList: (state, action) => {
      state.coinList = action.payload;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setCurrency, setCoinList, addError } = appSlice.actions;
