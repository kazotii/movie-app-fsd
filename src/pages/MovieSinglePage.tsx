import { useParams } from "react-router-dom";
import { useGetMoviesDetailsQuery } from "../app/store/movieApi";

export const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMoviesDetailsQuery(id ?? "", {
    skip: !id,
  });
  console.log(data);
  if (isLoading) return <h1>load, bro</h1>;
  if (error) return <p>error bratik</p>;

  return (
    <>
      <div>
        <img src={data?.moviePosterPath} style={{width: "20%"}}/>
      </div>
      <div>movie runtime: {data?.runtime} min</div>
      <div>movie genre: {data?.genres.map((genre) => <span key={genre.id}>{genre.name + ' '}</span>)}</div>
      <div>movie vote: {data?.vote_average.toFixed(1)}</div>
      <div>movie title: {data?.title}</div>
      <div>movie overview: {data?.overview}</div>
    </>
  );
};
