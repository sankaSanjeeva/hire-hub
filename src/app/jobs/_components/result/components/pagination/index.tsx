'use client';

import { useOptimistic, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { JobWithCompany, PaginatedResult } from '@/types';
import { ChevronIcon } from '../../../../../../../public/icons';

export default function Pagination({
  current_page,
  prev_page,
  next_page,
  total_pages,
}: PaginatedResult<JobWithCompany>['pagination']) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    Number(current_page ?? 1)
  );

  const handlePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.delete('page');
    params.set('page', `${newPage}`);

    startTransition(() => {
      setOptimisticValue(newPage);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="mt-10 flex gap-5" data-pending={isPending ? '' : undefined}>
      <Button
        variant="outline"
        onClick={() => handlePage(optimisticValue - 1)}
        disabled={!prev_page || isPending}
      >
        <ChevronIcon className="!h-6 !w-6 rotate-90 scale-90" />
        <span>Prev</span>
      </Button>

      <div className="flex flex-grow justify-center gap-6">
        {Array.from({ length: total_pages }, (_, k) => (
          <Button
            variant={optimisticValue === k + 1 ? 'default' : 'outline'}
            key={k}
            onClick={() => handlePage(k + 1)}
            disabled={isPending}
          >
            {k + 1}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={() => handlePage(optimisticValue + 1)}
        disabled={!next_page || isPending}
      >
        <span>Next</span>
        <ChevronIcon className="!h-6 !w-6 -rotate-90 scale-90" />
      </Button>
    </div>
  );
}
