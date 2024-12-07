'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useUpdateSearchParam } from '@/hook';

export default function CheckBoxItem({
  id,
  name,
  count,
  paramName,
}: {
  id: string;
  name: string;
  count: number;
  paramName: string;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const update = useUpdateSearchParam();

  const values = searchParams.get(paramName)?.split(',') ?? [];

  const handleCheck = (checked: CheckedState) => {
    replace(
      update(
        paramName,
        checked
          ? [...values, id].toString()
          : values.filter((x) => x !== id).toString()
      ),
      { scroll: false }
    );
  };

  return (
    <li className="flex items-center gap-2" key={id}>
      <Checkbox
        id={`${paramName}-${id}`}
        checked={values?.includes(id)}
        onCheckedChange={handleCheck}
      />
      <div className="flex-grow">
        <label htmlFor={`${paramName}-${id}`}>{name}</label>
      </div>
      <Badge variant="quantity">{count}</Badge>
    </li>
  );
}
