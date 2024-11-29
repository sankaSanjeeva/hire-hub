import { Suspense } from 'react';
import { CenteredContainer } from '@/components';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Filter, Result } from './components';
import { FilterIcon } from '../../../../../public/icons';

export default function Overview() {
  return (
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

          <Suspense>
            <Result />
          </Suspense>
        </div>
      </CenteredContainer>
    </section>
  );
}
