import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../../shared/api/movieApi";
import favoritesReducer from "../../entities/movie/model/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;