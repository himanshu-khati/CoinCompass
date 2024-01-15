import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchString: null,
    displaySearch: false,
    searchData: null,
  },
  reducers: {
    addSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setDisplaySearch: (state, action) => {
      state.displaySearch = action.payload;
    },
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { addSearchString, setDisplaySearch, addSearchData } =
  searchSlice.actions;
