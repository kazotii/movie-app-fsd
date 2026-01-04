import { useDispatch } from "react-redux";
import { useGetGenresQuery } from "../app/store/movieApi";
import { setGenre } from "../app/store/filterSlice";

export const GenreSelect = () => {
  const { data, isLoading, error } = useGetGenresQuery("en-US");
  const dispatch = useDispatch();
  if (isLoading) return <span>its loading bratishka...</span>;
  if (error) return <h1>error bro!</h1>;
  return (
    <div>
      <select onChange={(e) => dispatch(setGenre(Number(e.target.value)))}>
        <option value={""}>Choose a genre</option>
        {data?.genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};