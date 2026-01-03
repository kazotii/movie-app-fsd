import { useParams } from "react-router-dom";
import { useGetMoviesDetailsQuery } from "../app/store/movieApi";

export const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMoviesDetailsQuery(id ?? "", {
    skip: !id,
  });
  if (isLoading) return <h1>load, bro</h1>;
  if (error) return <p>error bratik</p>;

  return (
    <>
      <div>
        <img src={data?.moviePosterPath}/>
      </div>
      <div>movie title:{data?.title}</div>
      <div>movie overview:{data?.overview}</div>
    </>
  );
};
