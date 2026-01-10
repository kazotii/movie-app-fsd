import { createSlice } from "@reduxjs/toolkit";
import type { FullMovie } from "../../../shared/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  items: FullMovie[];
}

const initialState: FavoritesState = {
  items: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FullMovie>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push(action.payload);
      } else state.items.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;