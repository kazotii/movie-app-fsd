import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../app/store/movieApi";
import type { FullMovie } from "../shared/types";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/MovieListItem";

export const Homepage = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { data, isLoading, error } = useGetMoviesQuery(filters);
  if (isLoading) return <p>Load bro...</p>;
  if (error) return <p>Sorry error!{":("}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {data?.results?.map((movie: FullMovie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
