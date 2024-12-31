import { Skeleton } from '@/components/ui/skeleton';

export default function TopCompaniesSkeleton() {
  return (
    <div className="mt-14 grid grid-cols-[300px] justify-center gap-6 sm:grid-cols-[repeat(2,300px)] xl:grid-cols-[repeat(4,300px)]">
      {[1, 2, 3, 4].map((x) => (
        <div
          key={x}
          className="flex flex-col items-center gap-8 rounded-3xl bg-white px-10 py-12 shadow-card"
        >
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="h-[60px] w-[60px] rounded-full" />
            <Skeleton className="h-8 w-36" />
          </div>
          <div className="flex w-full flex-col items-center gap-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <Skeleton className="h-8 w-28" />
        </div>
      ))}
    </div>
  );
}
