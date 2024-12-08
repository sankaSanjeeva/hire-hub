'use client';

import { useOptimistic, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Sort() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    searchParams.get('sortBy') ?? 'desc'
  );

  const handleSort = (order: 'desc' | 'asc') => {
    const params = new URLSearchParams(searchParams);
    params.delete('sortBy');
    params.set('sortBy', order);

    startTransition(() => {
      setOptimisticValue(order);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div data-pending={isPending ? '' : undefined}>
      <Select
        value={optimisticValue}
        onValueChange={handleSort}
        disabled={isPending}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">Sort by latest</SelectItem>
          <SelectItem value="asc">Sort by oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
