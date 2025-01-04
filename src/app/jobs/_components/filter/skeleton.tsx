import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import {
  CheckBoxItemSkeleton,
  RadioGroupItemSkeleton,
  SalaryRangeInputSkeleton,
} from './components';

export default function FilterSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'sticky top-[74px] h-fit max-w-80 space-y-6 rounded-3xl px-5 py-10',
        className
      )}
    >
      <div className="space-y-5">
        <Skeleton className="h-6 max-w-44" />
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-20" />
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-20" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((x) => (
            <CheckBoxItemSkeleton key={x} />
          ))}
        </div>
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-20" />
        <div className="space-y-3">
          {[1, 2].map((x) => (
            <CheckBoxItemSkeleton key={x} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-40" />
        <div className="space-y-3">
          {[1, 2, 3].map((x) => (
            <CheckBoxItemSkeleton key={x} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-40" />
        <div className="space-y-3">
          {[1, 2].map((x) => (
            <RadioGroupItemSkeleton key={x} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-14" />
        <SalaryRangeInputSkeleton />
      </div>

      <div className="space-y-5">
        <Skeleton className="h-6 max-w-10" />
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-8 w-24 rounded-xl" />
          <Skeleton className="h-8 w-16 rounded-xl" />
          <Skeleton className="h-8 w-12 rounded-xl" />
          <Skeleton className="h-8 w-20 rounded-xl" />
          <Skeleton className="h-8 w-28 rounded-xl" />
          <Skeleton className="h-8 w-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
