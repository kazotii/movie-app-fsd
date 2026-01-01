import { useReducer } from "react";
import { filterReducer, initialState } from "./reducer";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useMovieFilters = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryKey = searchParams.get("query");
    const yearKey = searchParams.get("year");
    const genreKey = searchParams.get("genreId");
    if (queryKey) {
      dispatch({ type: "INPUT_QUERY", payload: queryKey });
    }
    if (yearKey) {
      dispatch({ type: "SET_YEAR", payload: Number(yearKey) });
    }
    if (genreKey) {
      dispatch({ type: "SET_GENRE", payload: Number(genreKey) });
    }
  }, [searchParams]);

  useEffect(() => {
    const searchResult: Record<string, string> = {};
    if (state.query) {
      searchResult.query = state.query;
    }
    if (state.year) {
      searchResult.year = String(state.year);
    }
    if (state.genreId) {
      searchResult.genreId = String(state.genreId);
    }

    setSearchParams(searchResult);
  }, [setSearchParams, state.genreId, state.query, state.year]);

  const Search = (value: string) => {
    dispatch({ type: "INPUT_QUERY", payload: value });
  };

  const YearFilter = (value: number) => {
    dispatch({ type: "SET_YEAR", payload: value });
  };

  const GenreFilter = (value: number) => {
    dispatch({ type: "SET_GENRE", payload: value });
  };

  return {
    state,
    searchParams,
    Search,
    YearFilter,
    GenreFilter,
  };
};