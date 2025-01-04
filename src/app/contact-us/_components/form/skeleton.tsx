import { Skeleton } from '@/components/ui/skeleton';

export default function FormSkeleton() {
  return (
    <div className="h-fit w-full space-y-10 px-10 py-16 lg:w-2/5">
      <div className="flex flex-col items-center gap-3 pb-1 pt-[6px]">
        <Skeleton className="h-7 w-1/2" />
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="col-span-2 space-y-2 pt-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="col-span-2 space-y-2 pt-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-[136px] w-full" />
        </div>
      </div>

      <Skeleton className="h-10 w-[136px] rounded-lg" />
    </div>
  );
}
