import { JobCardSkeleton } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

export default function ResultSkeleton() {
  return (
    <div>
      <div className="flex justify-between">
        <Skeleton className="h-4 w-full max-w-44" />
        <Skeleton className="h-10 w-full max-w-44" />
      </div>

      <div className="mt-10 space-y-6">
        {[1, 2, 3].map((x) => (
          <JobCardSkeleton key={x} />
        ))}
      </div>

      <div className="mt-10 flex justify-between gap-5">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}
