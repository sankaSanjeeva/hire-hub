import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export default function JobCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-2xl p-5 shadow-card lg:p-10', className)}>
      <div className="flex justify-between">
        <Skeleton className="h-8 w-24 rounded-lg" />
        <Skeleton className="h-6 w-6 rounded-lg" />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-[auto_1fr]">
        <Skeleton className="row-span-2 h-10 w-10 rounded-full" />
        <Skeleton className="h-[30px] w-48 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>

      <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex w-full flex-col flex-wrap gap-x-6 gap-y-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-lg" />
            <Skeleton className="h-4 w-32 rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-lg" />
            <Skeleton className="h-4 w-20 rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-lg" />
            <Skeleton className="h-4 w-24 rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-lg" />
            <Skeleton className="h-4 w-60 rounded-lg" />
          </div>
        </div>
        <Skeleton className="h-9 w-[104px] rounded" />
      </div>
    </div>
  );
}
