import { useSelector } from "react-redux";
import { movieApi } from "../../../shared/api/movieApi";
import type { RootState } from "../../../app/store/store";
import type { FilterParams } from "../../../shared/types";

export const useMoviePrefetch = () => {
  const prefetch = movieApi.usePrefetch('getMovies', {ifOlderThan: 60});

  const filters = useSelector((state: RootState) => state.filters);

  const startPrefetch = (args?: Partial<FilterParams>) => {
    prefetch({ ...filters, ...args });
  };
  return startPrefetch;
};