'use client';

import { JobCard } from '@/components';
import { Prisma } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const jobs = await res.json();
  return jobs as JobWithCompany[];
};

export default function Result() {
  const [jobs, setJobs] = useState<JobWithCompany[]>();
  const searchParams = useSearchParams();

  const search = searchParams.get('search');
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const level = searchParams.get('level');
  const range = searchParams.get('range');

  useEffect(() => {
    getJobs({
      ...(search ? { search } : {}),
      ...(category ? { category } : {}),
      ...(type ? { type } : {}),
      ...(level ? { level } : {}),
      ...(range ? { range } : {}),
    }).then((res) => {
      setJobs(res);
    });
  }, [category, search, type, level, range]);

  return (
    <div className="mt-10 space-y-6">
      {jobs?.map((job) => <JobCard key={job.id} {...job} />)}
    </div>
  );
}
