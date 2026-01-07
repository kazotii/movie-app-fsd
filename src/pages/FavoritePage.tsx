import { useSelector } from "react-redux";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";
import { useNavigate } from "react-router-dom";

export const FavoritePage = () => {
  const Maps = useNavigate();
  const movies = useSelector((state: RootState) => state.favorites.items);
  return (
    <>
      <button className="bg-amber-700 cursor-pointer" onClick={() => Maps(-1)}>
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-500">
        {movies.length === 0 ? (
          <span>No favorites</span>
        ) : (
          movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};