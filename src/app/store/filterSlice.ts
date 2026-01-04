import { createSlice } from "@reduxjs/toolkit";

const searchParams = new URLSearchParams(window.location.search);

const urlYear = searchParams.get("year");
const validatedYear =
  urlYear && !isNaN(Number(urlYear)) ? Number(urlYear) : null;

const urlGenre = searchParams.get("genre");
const validatedGenre =
  urlGenre && !isNaN(Number(urlGenre)) ? Number(urlGenre) : 0;

const urlQuery = searchParams.get("query");
const validatedQuery = urlQuery ? urlQuery : "";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    year: validatedYear,
    genreId: validatedGenre,
    query: validatedQuery,
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