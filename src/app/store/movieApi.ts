import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Movie, TmdbResponse } from "../../shared/types";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface FilterParams{
  genreId: number,
  year: string | null
}

export const movieApi = createApi({
  // base url + url + api_key + primary_release_year + with_genres
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<TmdbResponse<Movie>, FilterParams>({
      query: (filters) => ({
        url: "discover/movie",
        params: {
          api_key: API_KEY,
          primary_release_year: filters.year || '',
          with_genres: filters.genreId !== 0 ? filters.genreId: '',
          language: "eng-EN",
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;