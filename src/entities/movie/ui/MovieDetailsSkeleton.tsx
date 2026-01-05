import { Skeleton } from "./Skeleton";

export const MovieDetailsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[20%] aspect-2/3 mb-4" />{/* poster */}
      <Skeleton className="w-1/2 h-5 mb-2" />{/* runtime */}
      <Skeleton className="w-1/2 h-5 mb-2" />{/* genre */}
      <Skeleton className="w-1/2 h-5 mb-2" />{/* vote */}
      <Skeleton className="w-1/2 h-5 mb-2" />{/* title */}
      <Skeleton className="w-full h-4 mb-1"/>{/* overview 1 */}
      <Skeleton className="w-full h-4 mb-1"/>{/* overview 2 */}
      <Skeleton className="w-full h-4 mb-1"/>{/* overview 3 */}
    </div>
  );
};