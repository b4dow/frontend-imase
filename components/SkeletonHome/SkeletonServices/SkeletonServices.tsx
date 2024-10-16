import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonServices() {
  return (
    <>
      {/* Skeleton for Heading */}
      <div className="relative w-full h-[40vh] rounded-3xl overflow-hidden mb-5">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Skeleton className="h-10 w-1/3" />
        </div>
      </div>

      {/* Skeleton for Search */}
      <div className="flex items-center mb-5">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Skeleton for Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-2xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>

      {/* Skeleton for Pagination */}
      <div className="flex justify-center mt-10">
        <Skeleton className="h-10 w-64" />
      </div>
    </>
  );
}
