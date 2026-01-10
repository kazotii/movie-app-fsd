import { Skeleton } from "../../../shared/ui/sceleton/Skeleton";

export const MovieDetailsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[20%] aspect-2/3 mb-4" />
      <Skeleton className="w-1/2 h-5 mb-2" />
      <Skeleton className="w-1/2 h-5 mb-2" />
      <Skeleton className="w-1/2 h-5 mb-2" />
      <Skeleton className="w-1/2 h-5 mb-2" />
      <Skeleton className="w-full h-4 mb-1" />
      <Skeleton className="w-full h-4 mb-1" />
      <Skeleton className="w-full h-4 mb-1" />
    </div>
  );
};