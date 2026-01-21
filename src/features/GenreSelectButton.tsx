import { useSearchParams } from "react-router-dom";
import { useGetGenresQuery } from "../shared/api/movieApi";

export const GenreSelect = () => {
  const { data } = useGetGenresQuery("en-US");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSelectedGenre = searchParams.get("genre") || "";

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    const value = e.target.value;
    if (value) {
      newParams.set("genre", value);
    } else {
      newParams.delete("genre");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  return (
    <select
      className="cursor-pointer bg-gray-900 text-white"
      value={currentSelectedGenre}
      onChange={handleGenreChange}
    >
      <option value="">Choose a genre</option>
      {data?.genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};