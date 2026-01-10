import { useSelector } from "react-redux";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";
import { useNavigate } from "react-router-dom";
import { ErrorItem } from "../features/ErrorButton";
import { Frown } from "lucide-react";
import { BackButton } from "../features/BackButton";

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
      <div className="mt-4 ml-4 -mb-4">
        <BackButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 transition-opacity duration-500 m-4">
        {movies.length === 0 ? (
          <span>No favorites</span>
        ) : (
          movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};
