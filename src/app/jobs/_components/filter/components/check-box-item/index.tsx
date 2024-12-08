'use client';

import { useOptimistic, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

interface Props {
  id: string;
  name: string;
  count: number;
  paramName: string;
}

export default function CheckBoxItem({ id, name, count, paramName }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    searchParams.get(paramName)?.split(',') ?? []
  );

  const handleCheck = (checked: CheckedState) => {
    const value = checked
      ? [...optimisticValue, id]
      : optimisticValue.filter((x) => x !== id);

    const params = new URLSearchParams(searchParams);
    params.delete(paramName);
    params.set(paramName, value.toString());

    startTransition(() => {
      setOptimisticValue(value);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <li
      key={id}
      className="flex items-center gap-2 transition-opacity group-has-[[data-pending]]:pointer-events-none group-has-[[data-pending]]:opacity-65"
      data-pending={isPending ? '' : undefined}
    >
      <Checkbox
        id={`${paramName}-${id}`}
        checked={optimisticValue?.includes(id)}
        onCheckedChange={handleCheck}
      />
      <div className="flex-grow">
        <label htmlFor={`${paramName}-${id}`}>{name}</label>
      </div>
      <Badge variant="quantity">{count}</Badge>
    </li>
  );
}
