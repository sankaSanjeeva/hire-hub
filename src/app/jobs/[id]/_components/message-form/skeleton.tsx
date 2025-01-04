import { Skeleton } from '@/components/ui/skeleton';

export default function MessageFormSkeleton() {
  return (
    <div className="space-y-6 px-5 py-10">
      <Skeleton className="h-7 w-36" />
      <Skeleton className="h-10 w-full rounded-xl" />
      <Skeleton className="h-10 w-full rounded-xl" />
      <Skeleton className="h-10 w-full rounded-xl" />
      <Skeleton className="h-[116px] w-full rounded-xl" />
      <Skeleton className="h-10 w-[136px] rounded-lg" />
    </div>
  );
}
