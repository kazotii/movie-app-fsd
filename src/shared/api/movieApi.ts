import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import type {
  Movie,
  MovieDetails,
  TmdbResponse,
  FullMovie,
  FilterParams,
  Genre,
  TmdbTrailerVideo,
} from "../types";
import { getPosterUrl } from "./utils";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const rawBaseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
const baseQueryWithPlugins: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, error) => {
  if (typeof args !== "string") {
    args.params = {
      ...args.params,
      api_key: API_KEY,
      language: "en-US",
    };
  }
  const result = await rawBaseQuery(args, api, error);
  return result;
};

export const movieApi = createApi({
  // base url + url + api_key + primary_release_year + with_genres
  reducerPath: "movieApi",
  baseQuery: baseQueryWithPlugins,
  endpoints: (builder) => ({
    getMovies: builder.query<TmdbResponse<FullMovie>, FilterParams>({
      query: (filters) => {
        const filterUrl = "discover/movie";
        if (filters.query)
          return {
            url: "search/movie",
            params: {
              page: filters.page,
              query: filters.query,
            },
          };
        return {
          url: filterUrl,
          params: {
            page: filters.page,
            primary_release_year: filters.year || "",
            with_genres: filters.genreId !== 0 ? filters.genreId : "",
          },
        };
      },
      transformResponse: (response: TmdbResponse<Movie>) => {
        return {
          ...response,
          results: response.results.map((movie: Movie) => ({
            ...movie,
            moviePosterPath: getPosterUrl(movie.poster_path),
          })),
        };
      },
    }),
    getMoviesDetails: builder.query<MovieDetails & { moviePosterPath: string }, string>({
      keepUnusedDataFor: 120,
      query: (id) => ({
        url: `movie/${id}`,
        params: {
          append_to_response: "credits",
        },
      }),
      transformResponse: (response: MovieDetails) => {
        return {
          ...response,
          moviePosterPath: getPosterUrl(response.poster_path),
        };
      },
    }),
    getGenres: builder.query<{ genres: Genre[] }, string>({
      keepUnusedDataFor: 300,
      query: () => ({
        url: `genre/movie/list`,
      }),
    }),
    getMovieVideos: builder.query<string, string>({
      query: (id) => ({
        url: `movie/${id}/videos`,
      }),
      transformResponse: (response: TmdbResponse<TmdbTrailerVideo>) => {
        const trailer = response.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        return trailer ? trailer.key : "";
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesDetailsQuery,
  useGetGenresQuery,
  useGetMovieVideosQuery,
} = movieApi;