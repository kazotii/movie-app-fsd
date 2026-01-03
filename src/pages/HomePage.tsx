import { useSelector } from "react-redux";
import { useGetMoviesQuery, type FullMovie } from "../app/store/movieApi";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/MovieListItem";

export const Homepage = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { data, isLoading, error } = useGetMoviesQuery(filters);
  if (isLoading) return <p>Load bro...</p>;
  if (error) return <p>Sorry error!{":("}</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
        padding: "2px",
      }}
    >
      {data?.results?.map((movie: FullMovie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
