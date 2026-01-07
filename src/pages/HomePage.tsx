import { useDispatch, useSelector } from "react-redux";
import { useGetMoviesQuery } from "../shared/api/movieApi";
import type { FullMovie } from "../shared/types";
import type { RootState } from "../app/store/store";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";
import { GenreSelect } from "../features/GenreSelectButton";
import { YearSelect } from "../features/YearSelectButton";
import { MovieSkeleton } from "../entities/movie/ui/MovieSkeleton";
import { ResetFilter } from "../features/ResetFilterButton";
import { PageButton } from "../features/PageButton";
import { setPage } from "../entities/movie/model/filterSlice";
import { useCallback } from "react";

export const Homepage = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { data, isLoading, isFetching, error } = useGetMoviesQuery(filters);
  const dispatch = useDispatch();
  const handlePageChange = useCallback((number: number) => {
    dispatch(setPage(number))}, [dispatch]);
  if (error) return <p>Sorry error!{":("}</p>;

  return (
    <>
      <div className="flex gap-100 mb-10 ml-2 mt-2">
        <GenreSelect />
        <YearSelect />
        <ResetFilter />
        <PageButton
          currentPage={filters.page}
          totalPage={data?.total_pages || 1}
          action={handlePageChange}
        />
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-500 m-3
        ${isFetching && !isLoading ? "opacity-50" : "opacity-100"}`}
      >
        {isLoading
          ? [...Array(10)].map((_, i) => <MovieSkeleton key={i} />)
          : data?.results?.map((movie: FullMovie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
      </div>
    </>
  );
};