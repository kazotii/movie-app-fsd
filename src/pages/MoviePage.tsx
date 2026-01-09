import { useParams } from "react-router-dom";
import { useGetMoviesDetailsQuery } from "../shared/api/movieApi";
import { MovieDetailsSkeleton } from "../entities/movie/ui/MoviePageSkeleton";
import { FavoriteButton } from "../features/FavoriteButton";
import { useGetMovieVideosQuery } from "../shared/api/movieApi";
import { TrailerButton } from "../features/TrailerButton";
import { MovieTrailer } from "../entities/movie/ui/MovieTrailer";
import { useState } from "react";
import { BackButton } from "../features/BackButton";

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value?: string | number | React.ReactNode;
}) => {
  if (!value) return null;
  return (
    <p className="flex gap-2">
      <span className="text-slate-500 min-w-25">{label}:</span>
      <span className="text-slate-200">{value}</span>
    </p>
  );
};

export const MoviePage = () => {
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
              <BackButton/>
              <h1>{data?.title}</h1>
              <img src={data?.moviePosterPath} />
            </div>
            <div>
              <FavoriteButton movie={data!} />
              <TrailerButton onClick={() => setIsTrailerOpen(true)} />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <InfoRow label="Vote" value={vote} />
              <InfoRow
                label="Tagline"
                value={data?.tagline ? `«${data.tagline}»` : null}
              />
              <InfoRow label="Country" value={country} />
              <InfoRow
                label="Director"
                value={
                  director && (
                    <p>
                      <span>Director: </span>
                      {director}
                    </p>
                  )
                }
              />
              <InfoRow label="Release date" value={data?.release_date} />
              <InfoRow label="Genre" value={genre} />
              <InfoRow
                label="Runtime"
                value={data?.runtime ? `${data.runtime} min` : null}
              />
              <InfoRow label="Title" value={data?.title} />
              <InfoRow
                label="Cast"
                value={
                  actors && (
                    <p>
                      <span>Cast: </span>
                      {actors}
                    </p>
                  )
                }
              />
              <InfoRow label="Overview:" value={data?.overview} />
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
