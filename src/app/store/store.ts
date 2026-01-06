import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../../entities/movie/model/filterSlice";
import { movieApi } from "../../shared/api/movieApi";
import type { Middleware } from "@reduxjs/toolkit";

const urlSyncMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("filters/")) {
    const state = store.getState();
    const currentFilters = state.filters;
    const params = new URLSearchParams()
    if(currentFilters.year){
      params.set('year', currentFilters.year.toString() )
    }
    if(currentFilters.genreId){
      params.set('genre', currentFilters.genreId.toString() )
    }
    if(currentFilters.query){
      params.set('query', currentFilters.query)
    }
    window.history.replaceState({}, '', `?${params.toString()}`)
  }

  return result;
};

export const store = configureStore({
  reducer: { filters: filterReducer, [movieApi.reducerPath]: movieApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, urlSyncMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
