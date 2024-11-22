import { CenteredContainer } from '@/components';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter } from './components';
import { ChevronIcon, FilterIcon } from '../../../../../public/icons';

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

          <div className="flex justify-between">
            <p>Showing 6-6 of 10 results</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="time">Sort by latest</SelectItem>
                <SelectItem value="salary">Sort by salary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div className="mt-10 space-y-6">
            {Array.from({ length: 10 }, (_, k) => k + 1).map((item) => (
              <JobCard key={item} />
            ))}
          </div> */}

          <div className="mt-10 flex gap-5">
            <div className="flex flex-grow justify-center gap-6">
              <Button>1</Button>
              <Button variant="outline">2</Button>
            </div>
            <Button variant="outline">
              <span>Next</span>
              <ChevronIcon className="!h-6 !w-6 -rotate-90 scale-90" />
            </Button>
          </div>
        </div>
      </CenteredContainer>
    </section>
  );
}
