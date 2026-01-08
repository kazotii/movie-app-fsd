import { useNavigate, useParams } from "react-router-dom";
import { useGetMoviesDetailsQuery } from "../shared/api/movieApi";
import { MovieDetailsSkeleton } from "../entities/movie/ui/MoviePageSkeleton";
import { FavoriteButton } from "../features/FavoriteButton";
import { useGetMovieVideosQuery } from "../shared/api/movieApi";
import { TrailerButton } from "../features/TrailerButton";
import { MovieTrailer } from "../entities/movie/ui/MovieTrailer";
import { useState } from "react";

export const MoviePage = () => {
  const Maps = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useGetMoviesDetailsQuery(id ?? "", {
    skip: !id,
  });
  const { data: videoKey } = useGetMovieVideosQuery(id ?? "");
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  if (error) return <p>error bratik</p>;

  return (
    <>
      <button className="bg-amber-700 cursor-pointer" onClick={() => Maps(-1)}>
        Back
      </button>
      {isLoading ? (
        <MovieDetailsSkeleton />
      ) : (
        <>
          <div>
            <img src={data?.moviePosterPath} style={{ width: "20%" }} />
          </div>
          <FavoriteButton movie={data!} />
          <TrailerButton onClick={() => setIsTrailerOpen(true)} />
          <div>movie runtime: {data?.runtime} min</div>
          <div>
            movie genre:{" "}
            {data?.genres.map((genre) => (
              <span key={genre.id}>{genre.name + " "}</span>
            ))}
          </div>
          <div>movie vote: {data?.vote_average.toFixed(1)}</div>
          <div>movie title: {data?.title}</div>
          <div>movie overview: {data?.overview}</div>
          <MovieTrailer
            isOpen={isTrailerOpen}
            Close={() => setIsTrailerOpen(false)}
            videoKey={videoKey}
          />
        </>
      )}
    </>
  );
};
