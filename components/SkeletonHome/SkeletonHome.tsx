import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="flex w-96 h-40 flex-col">
      <div className="skeleton h-40 w-full"></div>
    </div>
  );
};

// export const SkeletonCards = () => {
//   return (
//     <div className="grid grid-cols-3 gap-5">
//       <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard />
//     </div>
//   );
// };

export const SkeletonImage = ({ className = "" }: { className?: string }) => (
  <Skeleton className={className} />
);

export const SkeletonText = ({ className = "" }: { className?: string }) => (
  <div className={`space-y-2 ${className}`}>
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-4 w-4/6" />
    <Skeleton className="h-10 w-40 mt-4" />
  </div>
);

export const SkeletonCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="border rounded-lg p-4">
        <Skeleton className="h-48 w-full mb-4" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-8 w-full" />
      </div>
    ))}
  </div>
);

export const SkeletonPagination = () => (
  <div className="flex justify-center items-center space-x-2 mt-4">
    <Skeleton className="h-10 w-10" />
    <Skeleton className="h-10 w-10" />
    <Skeleton className="h-10 w-10" />
  </div>
);

export const SkeletonHomeCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="border rounded-lg p-4">
        <Skeleton className="h-64 w-full mb-4" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    ))}
  </div>
);

export function SkeletonHome() {
  return (
    <div className="space-y-10">
      <Skeleton className="h-[50px] w-[200px] mx-auto" />

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <Skeleton className="w-full md:w-1/2 h-[200px]" />
        <Skeleton className="w-full md:w-96 h-80 rounded-2xl" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-[40px] w-[300px] mx-auto" />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full" />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-[40px] w-[300px] mx-auto" />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
