import { Suspense } from 'react';
import { CenteredContainer, SectionHeader } from '@/components';
import {
  Filter,
  FilterSkeleton,
  Result,
  ResultSkeleton,
  TopCompanies,
  TopCompaniesSkeleton,
} from './_components';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { JobFilters } from '@/types';
import { FilterIcon } from '../../../public/icons';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<JobFilters>;
}

export default async function Jobs({ searchParams }: Props) {
  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white">Jobs</h1>
      </section>

      <section>
        <CenteredContainer className="group grid grid-cols-1 gap-5 pb-28 pt-14 lg:grid-cols-[auto_1fr]">
          <Suspense fallback={<FilterSkeleton className="hidden lg:block" />}>
            <Filter className="hidden lg:block" />
          </Suspense>

          <div>
            <Sheet>
              <SheetTrigger className="lg:hidden" asChild>
                <Button className="mb-5 w-full sm:w-auto">
                  <span>Filters</span>
                  <FilterIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-auto overflow-auto">
                <SheetTitle />
                <Suspense fallback={<FilterSkeleton />}>
                  <Filter />
                </Suspense>
              </SheetContent>
            </Sheet>

            <Suspense fallback={<ResultSkeleton />}>
              <Result searchParams={searchParams} />
            </Suspense>
          </div>
        </CenteredContainer>
      </section>

      <section className="bg-theme/10">
        <CenteredContainer className="pb-28 pt-14">
          <SectionHeader
            main="Top Company"
            sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            className="text-center"
          />

          <Suspense fallback={<TopCompaniesSkeleton />}>
            <TopCompanies />
          </Suspense>
        </CenteredContainer>
      </section>
    </div>
  );
}
