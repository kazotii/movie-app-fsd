import { useDispatch, useSelector } from "react-redux";
import { useGetGenresQuery } from "../app/store/movieApi";
import { setGenre } from "../app/store/filterSlice";
import type { RootState } from "../app/store/store";

export const GenreSelect = () => {
  const { data } = useGetGenresQuery("en-US");
  const currentSelectedGenre = useSelector(
    (state: RootState) => state.filters.genreId
  );
  const dispatch = useDispatch();

  return (
    <>
      <select
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