import {
  CenteredContainer,
  JobCardSkeleton,
  SectionHeaderSkeleton,
} from '@/components';
import { Skeleton } from '@/components/ui/skeleton';
import { JobOverviewSkeleton, MessageFormSkeleton } from './_components';

export default function Loading() {
  return (
    <div>
      <div className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl text-white">Job Details</h1>
      </div>

      <CenteredContainer className="pb-28 pt-14">
        <div>
          <JobCardSkeleton
            action="apply"
            className="px-0 shadow-none lg:px-0"
          />
        </div>

        <div className="group grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="pt-[6px] lg:min-h-[544px]">
              <Skeleton className="h-6 w-44" />
              <Skeleton className="mt-2 h-4 w-1/2" />

              <Skeleton className="mt-9 h-6 w-52" />
              <div className="mt-3 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-4 w-40" />
                </div>
                <div className="inline-flex items-center gap-2">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-4 w-52" />
                </div>
              </div>

              <Skeleton className="mt-10 h-6 w-48" />
              <div className="mt-3 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-4 w-36" />
                </div>
                <div className="inline-flex items-center gap-2">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-4 w-56" />
                </div>
              </div>
            </div>

            <SectionHeaderSkeleton className="mt-14" />

            <div className="mt-10 space-y-6">
              {[1, 2, 3].map((x) => (
                <JobCardSkeleton key={x} />
              ))}
            </div>
          </div>

          <div className="w-full min-w-80 space-y-10">
            <JobOverviewSkeleton />
            <MessageFormSkeleton />
          </div>
        </div>
      </CenteredContainer>
    </div>
  );
}
