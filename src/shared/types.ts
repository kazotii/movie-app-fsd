export interface Movie {
  name: string;
  id: number;
  origin_country: string;
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  poster_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  imdb_id: number;
  adult: boolean;
  popularity: number;
  overview: string;
  runtime: number;
  vote_average: number;
  genres: Genre[];
}

export interface TmdbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type FullMovie = Movie & { moviePosterPath: string };

export interface FilterParams {
  genreId: number;
  year: string | null;
  query: string;
}
