'use client';

import { useOptimistic, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';

interface Props {
  items: { name: string; count: number }[];
  paramName: string;
  defaultValue?: string;
}

export default function RadioGroupItems({
  items,
  paramName,
  defaultValue,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    searchParams.get(paramName) ?? defaultValue
  );

  const handleCheck = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(paramName);
    params.set(paramName, value);

    startTransition(() => {
      setOptimisticValue(value);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <RadioGroup
      defaultValue={optimisticValue}
      onValueChange={handleCheck}
      className="gap-3"
    >
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center space-x-2 transition-opacity group-has-[[data-pending]]:pointer-events-none group-has-[[data-pending]]:opacity-65"
          data-pending={isPending ? '' : undefined}
        >
          <RadioGroupItem value={item.name} id={`${paramName}-${item.name}`} />
          <div className="flex-grow">
            <label htmlFor={`${paramName}-${item.name}`}>{item.name}</label>
          </div>
          <Badge variant="quantity">{item.count}</Badge>
        </div>
      ))}
    </RadioGroup>
  );
}
