import { JobCardSkeleton } from '@/components';

export default function RecentJobsSkeleton() {
  return (
    <div className="mt-14 space-y-6">
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
    </div>
  );
}
