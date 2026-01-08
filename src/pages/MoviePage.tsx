import { useNavigate, useParams } from "react-router-dom";
import { useGetMoviesDetailsQuery } from "../shared/api/movieApi";
import { MovieDetailsSkeleton } from "../entities/movie/ui/MoviePageSkeleton";
import { FavoriteButton } from "../features/FavoriteButton";
import { useGetMovieVideosQuery } from "../shared/api/movieApi";
import { TrailerButton } from "../features/TrailerButton";
import { MovieTrailer } from "../entities/movie/ui/MovieTrailer";
import { useState } from "react";
import { ArrowBigLeft } from "lucide-react";

export const MoviePage = () => {
  const Maps = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useGetMoviesDetailsQuery(id ?? "", {
    skip: !id,
  });
  const { data: videoKey } = useGetMovieVideosQuery(id ?? "");
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const director = data?.credits?.crew.find(
    (person) => person.job === "Director"
  )?.name;
  const actors = data?.credits?.cast
    .slice(0, 5)
    .map((actor) => actor.name)
    .join(", ");
  const genre = data?.genres.map((genre) => (
    <span key={genre.id}>{genre.name + ", "}</span>
  ));
  const vote = data?.vote_average.toFixed(1);
  const country = data?.production_countries?.[0]?.name;
  if (error) return <p>error bratik</p>;

  return (
    <>
      {isLoading ? (
        <MovieDetailsSkeleton />
      ) : (
        <div className="flex gap-10 flex-col md:flex-row max-w-7xl p-4">
          <div>
            <div>
              <h1>{data?.title}</h1>
              <img src={data?.moviePosterPath} />
            </div>
            <FavoriteButton movie={data!} />
            <TrailerButton onClick={() => setIsTrailerOpen(true)} />
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <span>Vote: {vote}</span>
              {data?.tagline && (
                <span>
                  <span className="text-slate-500">Tagline:</span> «
                  {data.tagline}»
                </span>
              )}
              <span>Country: {country}</span>
              {director && (
                <p>
                  <span>Director: </span>
                  {director}
                </p>
              )}
              <span>Release date: {data?.release_date}</span>
              <span>Genre: {genre}</span>
              <span>Runtime: {data?.runtime} min</span>
              <span>Title: {data?.title}</span>
              {actors && (
                <p>
                  <span>Cast: </span>
                  {actors}
                </p>
              )}
              <span>Overview: {data?.overview}</span>
            </div>
          </div>
          <MovieTrailer
            isOpen={isTrailerOpen}
            Close={() => setIsTrailerOpen(false)}
            videoKey={videoKey}
          />
        </div>
      )}
    </>
  );
};