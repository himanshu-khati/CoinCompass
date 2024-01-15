import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchString: null,
    searchData: null,
  },
  reducers: {
    addSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { addSearchString, addSearchData } = searchSlice.actions;
