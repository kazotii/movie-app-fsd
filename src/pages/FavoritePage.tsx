import { useSelector } from "react-redux";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";
import { useNavigate } from "react-router-dom";
import { ErrorItem } from "../shared/ui/error/ErrorItem";
import { Frown, ArrowBigLeft } from "lucide-react";

export const FavoritePage = () => {
  const Maps = useNavigate();
  const movies = useSelector((state: RootState) => state.favorites.items);
  if (movies.length === 0) {
    return (
      <ErrorItem
        title="Still empty :("
        description="Add movies to favorite to see them here!"
        buttonText="Go to movies!"
        Icon={Frown}
        action={() => Maps("/")}
      />
    );
  }
  return (
    <>
      <button
        className="cursor-pointer flex items-center gap-2 mb-6 px-4 bg-slate-800 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-md group"
        onClick={() => Maps(-1)}
      >
        <ArrowBigLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
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