import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chartReducer from "./chartSlice";
import exchangeReducer from "./exchangeSlice";
import searchReducer from "./searchSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    chart: chartReducer,
    exchange: exchangeReducer,
    search: searchReducer,
  },
});

export default appStore;
