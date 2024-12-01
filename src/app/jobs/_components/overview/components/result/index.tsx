'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Prisma } from '@prisma/client';
import { JobCard } from '@/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { PaginatedResult } from '@/types';
import { useUpdateSearchParam } from '@/hook';
import { ChevronIcon } from '../../../../../../../public/icons';

type JobWithCompany = Prisma.JobGetPayload<{
  include: {
    company: {
      include: {
        location: true;
      };
    };
    category: true;
    location: true;
  };
}>;

const getJobs = async (params?: { [key: string]: string }) => {
  const res = await fetch('/api/job?' + new URLSearchParams(params));
  const data = await res.json();
  return data as PaginatedResult<JobWithCompany>;
};

export default function Result() {
  const [data, setData] = useState<PaginatedResult<JobWithCompany>>();
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const update = useUpdateSearchParam();

  const page = Number(searchParams.get('page') ?? '1');
  const sortBy = searchParams.get('sortBy') ?? 'desc';
  const search = searchParams.get('search');
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const level = searchParams.get('level');
  const range = searchParams.get('range');
  const salaryMin = searchParams.get('salaryMin');
  const salaryMax = searchParams.get('salaryMax');

  const handlePage = (newPage: number) => {
    replace(update('page', `${newPage}`), { scroll: false });
  };

  const handleSort = (order: Prisma.SortOrder) => {
    replace(update('sortBy', order), { scroll: false });
  };

  useEffect(() => {
    getJobs({
      sortBy,
      page: `${page}`,
      ...(search ? { search } : {}),
      ...(category ? { category } : {}),
      ...(type ? { type } : {}),
      ...(level ? { level } : {}),
      ...(range ? { range } : {}),
      ...(salaryMin ? { salaryMin } : {}),
      ...(salaryMax ? { salaryMax } : {}),
    }).then((res) => {
      setData(res);
    });
  }, [
    category,
    search,
    type,
    level,
    range,
    page,
    sortBy,
    salaryMin,
    salaryMax,
  ]);

  return (
    <>
      <div className="flex justify-between">
        <p>
          Showing {data?.pagination.current_page}-{data?.pagination.total_pages}{' '}
          of {data?.data.length} results
        </p>
        <Select value={sortBy} onValueChange={handleSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Sort by latest</SelectItem>
            <SelectItem value="asc">Sort by oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-10 space-y-6">
        {data?.data.map((job) => <JobCard key={job.id} {...job} />)}
      </div>

      <div className="mt-10 flex gap-5">
        <Button
          variant="outline"
          onClick={() => handlePage(page - 1)}
          disabled={!data?.pagination.prev_page}
        >
          <ChevronIcon className="!h-6 !w-6 rotate-90 scale-90" />
          <span>Prev</span>
        </Button>

        <div className="flex flex-grow justify-center gap-6">
          {Array.from({ length: data?.pagination.total_pages ?? 0 }, (v, k) => (
            <Button
              variant={page === k + 1 ? 'default' : 'outline'}
              key={k}
              onClick={() => handlePage(k + 1)}
            >
              {k + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => handlePage(page + 1)}
          disabled={!data?.pagination.next_page}
        >
          <span>Next</span>
          <ChevronIcon className="!h-6 !w-6 -rotate-90 scale-90" />
        </Button>
      </div>
    </>
  );
}
