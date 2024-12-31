import { Skeleton } from '@/components/ui/skeleton';

function JobOverviewItem({
  keyClass,
  valueClass,
}: {
  keyClass: string;
  valueClass: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1">
      <Skeleton className="row-span-2 h-6 w-6" />
      <Skeleton className={keyClass} />
      <Skeleton className={valueClass} />
    </div>
  );
}

export default function JobOverviewSkeleton() {
  return (
    <div className="space-y-7 px-5 py-10">
      <Skeleton className="h-7 w-28" />
      <JobOverviewItem keyClass="h-4 w-16" valueClass="h-4 w-24" />
      <JobOverviewItem keyClass="h-4 w-16" valueClass="h-4 w-16" />
      <JobOverviewItem keyClass="h-4 w-16" valueClass="h-4 w-28" />
      <JobOverviewItem keyClass="h-4 w-20" valueClass="h-4 w-28" />
      <JobOverviewItem keyClass="h-4 w-20" valueClass="h-4 w-16" />
      <JobOverviewItem keyClass="h-4 w-28" valueClass="h-4 w-20" />
      <JobOverviewItem keyClass="h-4 w-16" valueClass="h-4 w-full" />
    </div>
  );
}
