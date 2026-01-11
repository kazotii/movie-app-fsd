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
import { setPage, setSearchQuery } from "../entities/movie/model/filterSlice";
import { useCallback } from "react";
import { ErrorItem } from "../features/ErrorButton";
import { SearchX, AlertCircle } from "lucide-react";

export const Homepage = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { data, isLoading, isFetching, error, refetch } =
    useGetMoviesQuery(filters);
  const dispatch = useDispatch();
  const handlePageChange = useCallback(
    (number: number) => {
      dispatch(setPage(number));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    [dispatch]
  );
  if (error) {
    return (
      <ErrorItem
        title="Oops! Might be server error"
        description="Cannot load your movies. Checkout your connection"
        buttonText="Try again"
        Icon={AlertCircle}
        action={() => refetch()}
      />
    );
  }
  if (!isLoading && data?.results.length === 0) {
    return (
      <ErrorItem
        title="Oops! No movie was found!"
        description="Cannot find your movie. Checkout others!"
        buttonText="Check other movies!"
        Icon={SearchX}
        action={() => dispatch(setSearchQuery(""))}
      />
    );
  }

  return (
    <>
      <div className="flex gap-3 md:gap-10 ml-2">
        <GenreSelect />
        <YearSelect />
        <ResetFilter />
      </div>
      <div
        className={`grid grid-cols-1 lg:grid-cols-5 gap-6 transition-opacity duration-500 m-3
        ${isFetching && !isLoading ? "opacity-50" : "opacity-100"}`}
      >
        {isLoading
          ? [...Array(10)].map((_, i) => <MovieSkeleton key={i} />)
          : data?.results?.map((movie: FullMovie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
      </div>
      <div className="flex justify-center w-full">
        <PageButton
          currentPage={filters.page}
          totalPage={data?.total_pages || 1}
          action={handlePageChange}
        />
      </div>
    </>
  );
};