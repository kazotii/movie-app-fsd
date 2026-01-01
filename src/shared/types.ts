interface Movie {
  name: string;
  id: number;
  origin_country: string;
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  poster_path: string;
}

interface MovieDetails extends Movie {
  imdb_id: number;
  adult: boolean;
  popularity: number;
  overview: string;
}

interface TmdbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}