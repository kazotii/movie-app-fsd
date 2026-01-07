import { Link } from "react-router-dom";
import type { FullMovie } from "../../../shared/types";
import { FavoriteButton } from "../../../features/FavoriteButton";

export interface MovieListItemProps {
  movie: FullMovie;
}

export const MovieListItem = ({ movie }: MovieListItemProps) => {
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
      <div className="flex flex-col mt-2 ">
        <h2>{movie.title}</h2>
        <p>Release:{movie.release_date}</p>
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
};
