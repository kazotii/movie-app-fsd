import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../shared/api/movieApi";
import type { FullMovie } from "../shared/types";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";
import { SearchInput } from "../features/SearchInputQuery";
import { GenreSelect } from "../features/GenreSelectButton";
import { YearSelect } from "../features/YearSelectButton";
import { MovieSkeleton } from "../entities/movie/ui/MovieSkeleton";
import { ResetFilter } from "../features/ResetFilterButton";

export const Homepage = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { data, isLoading, isFetching, error } = useGetMoviesQuery(filters);
  if (error) return <p>Sorry error!{":("}</p>;

  return (
    <>
      <div className="mb-4">
        <SearchInput />
        <GenreSelect />
        <YearSelect />
        <ResetFilter />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-500 ${isFetching && !isLoading ? 'opacity-50' : 'opacity-100'}`} >
        {isLoading
          ? [...Array(10)].map((_, i) => <MovieSkeleton key={i} />)
          : data?.results?.map((movie: FullMovie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
      </div>
    </>
  );
};
