import { Skeleton } from '@/components/ui/skeleton';

export default function SalaryRangeInputSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-4 max-w-40" />
    </div>
  );
}
