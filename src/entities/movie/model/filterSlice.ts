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

const urlPage = searchParams.get("page");
const validatedPage =
  urlPage && !isNaN(Number(urlPage)) ? Number(urlPage) : 1;

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    year: validatedYear,
    genreId: validatedGenre,
    query: validatedQuery,
    page: validatedPage
  },
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
      state.page = 1 
    },
    setGenre: (state, action) => {
      state.genreId = action.payload;
      state.page = 1 
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1 
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    resetFilters: (state) => {
      state.year = null;
      state.query = "";
      state.genreId = 0;
    },
  },
});

export const { setYear, setGenre, setSearchQuery, setPage, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;