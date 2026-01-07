import { useDispatch, useSelector } from "react-redux";
import { useGetGenresQuery } from "../shared/api/movieApi";
import { setGenre } from "../entities/movie/model/filterSlice";
import type { RootState } from "../app/store/store";
import { useMoviePrefetch } from "../entities/movie/model/useMoviePrefetch";

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
        className="cursor-pointer bg-gray-900 text-white"
        onMouseEnter={() => {
          prefetch();
        }}
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