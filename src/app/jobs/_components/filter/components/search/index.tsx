'use client';

import { ChangeEvent, useOptimistic, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { SearchIcon, SpinnerIcon } from '../../../../../../../public/icons';

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    searchParams.get('search') ?? ''
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    if (e.target.value) {
      params.set('search', e.target.value);
    }

    startTransition(() => {
      setOptimisticValue(e.target.value);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="space-y-5" data-pending={isPending ? '' : undefined}>
      <span className="text-xl font-semibold leading-none">
        Search by Job Title
      </span>
      <div className="relative">
        {isPending ? (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SpinnerIcon className="h-5 w-5 animate-spin text-gray-500" />
          </div>
        ) : (
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        )}
        <Input
          className="rounded-xl pl-10"
          placeholder="Job title or company"
          value={optimisticValue}
          onChange={handleChange}
          autoComplete="off"
          type="search"
        />
      </div>
    </div>
  );
}
