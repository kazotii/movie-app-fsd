import { Link } from "react-router-dom";
import type { FullMovie } from "../../app/store/movieApi";

interface MovieCardProps {
  movie: FullMovie;
}

export const MovieListItem = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div style={{ border: "1px solid white", padding: "10px" }}>
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
