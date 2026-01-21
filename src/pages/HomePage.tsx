import { useSearchParams } from "react-router-dom";
import { useGetMoviesQuery } from "../shared/api/movieApi";
import type { FullMovie } from "../shared/types";
import { MovieListItem } from "../entities/movie/ui/MovieListItem";
import { GenreSelect } from "../features/GenreSelectButton";
import { YearSelect } from "../features/YearSelectButton";
import { MovieSkeleton } from "../entities/movie/ui/MovieSkeleton";
import { ResetFilter } from "../features/ResetFilterButton";
import { PageButton } from "../features/PageButton";
import { useCallback, useMemo } from "react";
import { ErrorItem } from "../features/ErrorButton";
import { SearchX, AlertCircle } from "lucide-react";

export const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(
    () => ({
      genreId: Number(searchParams.get("genre")) || 0,
      year: searchParams.get("year") ? Number(searchParams.get("year")) : null,
      query: searchParams.get("query") || "",
      page: Number(searchParams.get("page")) || 1,
    }),
    [searchParams],
  );

  const { data, isLoading, isFetching, error, refetch } =
    useGetMoviesQuery(filters);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", pageNumber.toString());
      setSearchParams(newParams);

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [searchParams, setSearchParams],
  );

  const handleResetSearch = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("query");
    newParams.set("page", "1");
    setSearchParams(newParams);
  };
  if (error) {
    return (
      <ErrorItem
        title="Oops! Might be server error"
        description="Cannot load your movies."
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
        buttonText="Clear search"
        Icon={SearchX}
        action={handleResetSearch}
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