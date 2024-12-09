'use client';

import { ChangeEvent, useOptimistic, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { LocationIcon, SpinnerIcon } from '../../../../../../../public/icons';

export default function LocationSelect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    searchParams.get('city') ?? ''
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.delete('city');
    if (e.target.value) {
      params.set('city', e.target.value);
    }

    startTransition(() => {
      setOptimisticValue(e.target.value);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="relative" data-pending={isPending ? '' : undefined}>
      {isPending ? (
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <SpinnerIcon className="h-5 w-5 animate-spin text-gray-500" />
        </div>
      ) : (
        <LocationIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
      )}
      <Input
        list="cities"
        autoComplete="off"
        placeholder="Job or Company location"
        className="rounded-xl pl-10 [&::-webkit-calendar-picker-indicator]:!hidden"
        value={optimisticValue}
        onChange={handleChange}
      />
    </div>
  );
}
