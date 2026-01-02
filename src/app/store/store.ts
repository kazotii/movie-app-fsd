import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import { movieApi } from "./movieApi";

export const store = configureStore({
  reducer: { filters: filterReducer, [movieApi.reducerPath]:movieApi.reducer },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});
