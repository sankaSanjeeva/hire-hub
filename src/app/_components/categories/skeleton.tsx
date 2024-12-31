import { Skeleton } from '@/components/ui/skeleton';

export default function CategoriesSkeleton() {
  return (
    <div className="mt-14 flex flex-wrap justify-center gap-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex h-[280px] w-[300px] flex-col items-center justify-between rounded-3xl bg-white p-14 shadow-card"
        >
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-full rounded-lg" />
          <Skeleton className="h-8 w-16 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
