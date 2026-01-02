import type { Movie } from "../../shared/types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const movieImageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";
  return (
    <div style={{ border: "1px solid white", padding: "10px" }}>
      <img src={movieImageUrl} alt={movie.title} style={{ width: "100%" }} />
      <h2>{movie.title}</h2>
      <p>Release:{movie.release_date}</p>
    </div>
  );
};
