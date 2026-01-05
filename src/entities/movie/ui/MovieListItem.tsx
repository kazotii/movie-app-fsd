import { Link } from "react-router-dom";
import type { FullMovie } from "../../../shared/types";

export interface MovieListItemProps {
  movie: FullMovie;
}

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="hover:scale-105 transition-transform">
        <img
          src={movie.moviePosterPath}
          alt={movie.title}
          style={{ width: "100%" }}
        />
        <h2>{movie.title}</h2>
        <p>Release:{movie.release_date}</p>
      </div>
    </Link>
  );
};
