import { useSearchParams } from "react-router-dom";
import { movieApi } from "../../../shared/api/movieApi";
import type { FilterParams } from "../../../shared/types";

export const useMoviePrefetch = () => {
  const [searchParams] = useSearchParams();
  const prefetch = movieApi.usePrefetch("getMovies", { ifOlderThan: 60 });
  const currentFilters: FilterParams = {
    genreId: Number(searchParams.get("genre")) || 0,
    year: searchParams.get("year") ? Number(searchParams.get("year")) : null,
    query: searchParams.get("query") || "",
    page: Number(searchParams.get("page")) || 1,
  };
  const startPrefetch = (args?: Partial<FilterParams>) => {
    prefetch({ ...currentFilters, ...args });
  };

  return startPrefetch;
};