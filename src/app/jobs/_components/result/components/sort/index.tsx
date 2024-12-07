'use client';

import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useUpdateSearchParam } from '@/hook';

interface Props {
  sortBy?: string;
}

export default function Sort({ sortBy }: Props) {
  const { replace } = useRouter();
  const update = useUpdateSearchParam();

  const handleSort = (order: 'desc' | 'asc') => {
    replace(update('sortBy', order), { scroll: false });
  };

  return (
    <Select value={sortBy} onValueChange={handleSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="desc">Sort by latest</SelectItem>
        <SelectItem value="asc">Sort by oldest</SelectItem>
      </SelectContent>
    </Select>
  );
}
