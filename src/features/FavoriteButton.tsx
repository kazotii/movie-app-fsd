import { useDispatch, useSelector } from "react-redux";
import type { FullMovie } from "../shared/types";
import { toggleFavorite } from "../entities/movie/model/favoriteSlice";
import type { RootState } from "../app/store/store";
import { Star } from "lucide-react";

export const FavoriteButton = ({ movie }: { movie: FullMovie }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorite.some((item) => item.id === movie.id);
  const favoriteToggle = () => {
    dispatch(toggleFavorite(movie));
  };
  return (
    <button onClick={favoriteToggle} className="cursor-pointer">
      <Star size={30} className={isFavorite ? "fill-amber-300" : "fill-none"} />
    </button>
  );
};