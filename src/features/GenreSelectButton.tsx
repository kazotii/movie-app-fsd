import { useDispatch, useSelector } from "react-redux";
import { useGetGenresQuery } from "../app/movieApi";
import { setGenre } from "../app/filterSlice";
import type { RootState } from "../app/store";
import { useMoviePrefetch } from "../app/useMoviePrefetch";

export const GenreSelect = () => {
  const { data } = useGetGenresQuery("en-US");
  const currentSelectedGenre = useSelector(
    (state: RootState) => state.filters.genreId
  );
  const dispatch = useDispatch();
  const prefetch = useMoviePrefetch();

  return (
    <>
      <select
        className="cursor-pointer"
        onMouseEnter={() => {
          prefetch()}}
        value={currentSelectedGenre ?? ""}
        onChange={(e) => dispatch(setGenre(Number(e.target.value)))}
      >
        <option value={""}>Choose a genre</option>
        {data?.genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </>
  );
};