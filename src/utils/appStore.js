import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chartReducer from "./chartSlice";
import exchangeReducer from "./exchangeSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    chart: chartReducer,
    exchange: exchangeReducer,
  },
});

export default appStore;
