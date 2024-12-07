'use client';

import { ChangeEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUpdateSearchParam } from '@/hook';
import { Input } from '@/components/ui/input';
import { SearchIcon } from '../../../../../../../public/icons';

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const update = useUpdateSearchParam();

  const value = searchParams.get('search') ?? '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    replace(update('search', e.target.value), { scroll: false });
  };

  return (
    <div className="space-y-5">
      <span className="text-xl font-semibold leading-none">
        Search by Job Title
      </span>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        <Input
          className="rounded-xl pl-10"
          placeholder="Job title or company"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
