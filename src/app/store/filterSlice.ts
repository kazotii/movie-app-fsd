import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    query: "",
    year: null,
    genreId: 0,
  },
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setGenre: (state, action) => {
      state.genreId = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    resetFilters: (state) => {
      state.year = null;
      state.query = "";
      state.genreId = 0;
    },
  },
});

export const { setYear, setGenre, setSearchQuery, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
