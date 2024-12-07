'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useUpdateSearchParam } from '@/hook';
import { ChevronIcon } from '../../../../../../../public/icons';
import { JobWithCompany, PaginatedResult } from '@/types';

export default function Pagination({
  current_page,
  prev_page,
  next_page,
  total_pages,
}: PaginatedResult<JobWithCompany>['pagination']) {
  const { replace } = useRouter();
  const update = useUpdateSearchParam();

  const handlePage = (newPage: number) => {
    replace(update('page', `${newPage}`), { scroll: false });
  };

  return (
    <div className="mt-10 flex gap-5">
      <Button
        variant="outline"
        onClick={() => handlePage(Number(current_page) - 1)}
        disabled={!prev_page}
      >
        <ChevronIcon className="!h-6 !w-6 rotate-90 scale-90" />
        <span>Prev</span>
      </Button>

      <div className="flex flex-grow justify-center gap-6">
        {Array.from({ length: total_pages }, (_, k) => (
          <Button
            variant={Number(current_page) === k + 1 ? 'default' : 'outline'}
            key={k}
            onClick={() => handlePage(k + 1)}
          >
            {k + 1}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={() => handlePage(Number(current_page) + 1)}
        disabled={!next_page}
      >
        <span>Next</span>
        <ChevronIcon className="!h-6 !w-6 -rotate-90 scale-90" />
      </Button>
    </div>
  );
}
