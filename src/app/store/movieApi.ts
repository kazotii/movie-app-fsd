import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const movieApi = createApi({
  // base url + url + api_key + primary_release_year + with_genres
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (filters) => ({
        url: "discover/movie",
        params: {
          api_key: API_KEY,
          primary_release_year: filters.year,
          with_genres: filters.genreId,
          language: "eng-EN",
        },
      }),
    }),
  }),
});
