import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Movie, MovieDetails, TmdbResponse } from "../../shared/types";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface FilterParams {
  genreId: number;
  year: string | null;
}

export type FullMovie = Movie & { moviePosterPath: string };

export const movieApi = createApi({
  // base url + url + api_key + primary_release_year + with_genres
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<TmdbResponse<FullMovie>, FilterParams>({
      query: (filters) => ({
        url: "discover/movie",
        params: {
          api_key: API_KEY,
          primary_release_year: filters.year || "",
          with_genres: filters.genreId !== 0 ? filters.genreId : "",
          language: "en-US",
        },
      }),
      transformResponse: (response: TmdbResponse<Movie>) => {
        return {
          ...response,
          results: response.results.map((movie: Movie) => ({
            ...movie,
            moviePosterPath: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Poster",
          })),
        };
      },
    }),
    getMoviesDetails: builder.query<MovieDetails & { moviePosterPath: string }, string> ({
      query: (id) => ({
        url: `movie/${id}`,
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      }),
      transformResponse: (response: MovieDetails) => {
        return {
          ...response,
          moviePosterPath: response.poster_path
            ? `https://image.tmdb.org/t/p/w500${response.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Poster",
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesDetailsQuery } = movieApi;