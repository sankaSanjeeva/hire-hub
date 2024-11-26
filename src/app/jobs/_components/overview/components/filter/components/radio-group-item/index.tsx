'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useUpdateSearchParam } from '@/hook';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';

export default function RadioGroupItems({
  items,
  paramName,
  defaultValue,
}: {
  items: { name: string; count: number }[];
  paramName: string;
  defaultValue?: string;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const update = useUpdateSearchParam();

  const values = searchParams.get(paramName) ?? defaultValue;

  const handleCheck = (value: string) => {
    replace(update(paramName, value), { scroll: false });
  };

  return (
    <RadioGroup defaultValue={values} onValueChange={handleCheck}>
      {items.map((item) => (
        <li className="flex items-center space-x-2" key={item.name}>
          <RadioGroupItem value={item.name} id={`${paramName}-${item.name}`} />
          <div className="flex-grow">
            <label htmlFor={`${paramName}-${item.name}`}>{item.name}</label>
          </div>
          <Badge variant="quantity">{item.count}</Badge>
        </li>
      ))}
    </RadioGroup>
  );
}
