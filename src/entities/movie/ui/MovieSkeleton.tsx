import { Skeleton } from "./Skeleton";

export const MovieSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Skeleton className="h-80 w-full min-w-25 bg-gray-700" />
      <Skeleton className="h-4 w-3/4 min-w-12.5 bg-red-700" />
    </div>
  );
};