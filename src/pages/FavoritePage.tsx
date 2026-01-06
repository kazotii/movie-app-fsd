import { useSelector } from "react-redux";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";

export const FavoritePage = () => {
  const movies = useSelector((state: RootState) => state.favorites.items);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-500">
      {movies.length === 0 ? (
        <span>No favorites</span>
      ) : (
        movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)
      )}
    </div>
  );
};