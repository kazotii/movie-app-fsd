import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from "../../../shared/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  items: Movie[];
}

const initialState: FavoritesState = { items: [] };

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Movie>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push(action.payload);
      } else state.items.splice(index, 1);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer 