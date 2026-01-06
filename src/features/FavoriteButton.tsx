import { useDispatch, useSelector } from "react-redux";
import type { FullMovie } from "../shared/types";
import { toggleFavorite } from "../entities/movie/model/favoriteSlice";
import type { RootState } from "../app/store/store";

export const FavoriteButton = ({ movie }: { movie: FullMovie }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorite.some((item) => item.id === movie.id);
  const favoriteToggle = () => {
    dispatch(toggleFavorite(movie));
  };
  return (
    <button onClick={favoriteToggle} className="cursor-pointer bg-amber-700 text-amber-50">
      {isFavorite ? "Remove from favorite" : "Add to favorite"}
    </button>
  );
};