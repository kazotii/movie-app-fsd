import { Link } from "react-router-dom";
import type { FullMovie } from "../../../shared/types";
import { FavoriteButton } from "../../../features/FavoriteButton";
import { TrailerButton } from "../../../features/TrailerButton";
import { useState } from "react";
import { MovieTrailer } from "./MovieTrailer";
import { useGetMovieVideosQuery } from "../../../shared/api/movieApi";

export interface MovieListItemProps {
  movie: FullMovie;
}

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  const { data: videoKey } = useGetMovieVideosQuery(movie.id.toString());
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <div className="hover:scale-105 transition-transform">
          <img
            src={movie.moviePosterPath}
            alt={movie.title}
            style={{ width: "100%" }}
          />
        </div>
      </Link>
      <div className="flex justify-between mt-2">
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.release_date.slice(0, 4)}</p>
        </div>
        <div>
          <FavoriteButton movie={movie} />
          <TrailerButton onClick={() => setIsTrailerOpen(true)} />
        </div>
        <MovieTrailer
          isOpen={isTrailerOpen}
          Close={() => setIsTrailerOpen(false)}
          videoKey={videoKey}
        />
      </div>
    </div>
  );
};