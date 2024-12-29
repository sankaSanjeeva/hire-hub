import { Skeleton } from '@/components/ui/skeleton';

export default function CheckBoxItemSkeleton() {
  return (
    <li className="flex items-center gap-2">
      <Skeleton className="h-4 w-4 rounded" />
      <div className="flex-grow">
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Skeleton className="h-6 w-6 rounded-full" />
    </li>
  );
}
