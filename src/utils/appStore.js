import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chartReducer from "./chartSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    chart: chartReducer,
  },
});

export default appStore;
