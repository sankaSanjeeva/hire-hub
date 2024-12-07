import { CenteredContainer } from '@/components';
import { Filter, Result, TopCompanies } from './_components';
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
  const filters = await searchParams;

  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white">Jobs</h1>
      </section>

      <section>
        <CenteredContainer className="grid grid-cols-1 gap-5 pb-28 pt-14 lg:grid-cols-[auto_1fr]">
          <Filter className="hidden lg:block" />

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
                <Filter />
              </SheetContent>
            </Sheet>

            <Result {...filters} />
          </div>
        </CenteredContainer>
      </section>

      <TopCompanies />
    </div>
  );
}
