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

  if (error || !data) return <p>Sorry, error!</p>;

  const poster = data.moviePosterPath;
  const title = data.title;
  const vote = data?.vote_average.toFixed(1);
  const tagline = data.tagline ? `«${data.tagline}»` : null;
  const country = data?.production_countries?.[0]?.name;
  const director = data?.credits?.crew.find(
    (person) => person.job === "Director"
  )?.name;
  const release = data.release_date;
  const genre = data.genres.map(g => g.name).join(", ");
  const runtime = data.runtime ? `${data.runtime} min` : null;
  const actors = data.credits?.cast
    .slice(0, 5)
    .map((actor) => actor.name)
    .join(", ");
  const homepageUrl = data.homepage || null;
  const revenue = data.revenue
    ? `$${data.revenue.toLocaleString("en-US")}`
    : null;
  const overview = data.overview;

  return (
    <>
      {isLoading ? (
        <MovieDetailsSkeleton />
      ) : (
        <div className="flex gap-10 flex-col md:flex-row p-4">
          <div>
            <div className="w-full md:w-86">
              <BackButton />
              <img src={poster} />
            </div>
            <div className="mt-3">
              <FavoriteButton movie={data} />
              <TrailerButton onClick={() => setIsTrailerOpen(true)} />
            </div>
          </div>
          <div className="flex-1 min-w-0 w-full flex flex-col gap-4 md:mt-6 -mt-7">
            <h1 className="font-bold text-xl text-amber-400">{title}</h1>
            <InfoRow label="Vote" value={vote} />
            <InfoRow label="Tagline" value={tagline} />
            <InfoRow label="Country" value={country} />
            <InfoRow label="Director" value={director} />
            <InfoRow label="Release" value={release} />
            <InfoRow label="Genre" value={genre} />
            <InfoRow label="Runtime" value={runtime} />
            <InfoRow label="Cast" value={actors} />
            {homepageUrl && (
              <InfoRow
                label="Homepage"
                value={
                  <a
                    href={homepageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-500 hover:underline block truncate max-w-65 md:max-w-100"
                  >
                    {homepageUrl}
                  </a>
                }
              />
            )}
            <InfoRow label="Revenue" value={revenue} />
            <div className="mb-1 pt-1 border-t border-white/10">
              <p className="text-slate-500">Overview:</p>
              <p className="text-slate-200 text-lg">{overview}</p>
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