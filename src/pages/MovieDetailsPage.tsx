import { useNavigate, useParams } from "react-router-dom";
import { useGetMoviesDetailsQuery } from "../app/store/movieApi";
import { MovieDetailsSkeleton } from "../entities/movie/ui/MovieDetailsSkeleton";

export const MovieDetails = () => {
  const Maps = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useGetMoviesDetailsQuery(id ?? "", {
    skip: !id,
  });
  const mainContent = (
    <>
      <div>
        <img src={data?.moviePosterPath} style={{ width: "20%" }} />
      </div>
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
    </>
  );
  if (error) return <p>error bratik</p>;

  return (
    <>
      <button className="bg-amber-700 cursor-pointer" onClick={() => Maps(-1)}>
        Back
      </button>
      {isLoading ? <MovieDetailsSkeleton /> : mainContent}
    </>
  );
};