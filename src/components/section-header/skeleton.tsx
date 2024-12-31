import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export default function SectionHeaderSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('space-y-10', className)}>
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
