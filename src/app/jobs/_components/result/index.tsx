import { JobCard } from '@/components';
import { getJobs } from '@/services/jobs';
import { Pagination, Sort } from './components';
import { JobFilters } from '@/types';

export default async function Result({
  page,
  sortBy,
  search,
  category,
  type,
  level,
  range,
  salaryMin,
  salaryMax,
}: JobFilters) {
  const data = await getJobs({
    ...(sortBy ? { sortBy } : {}),
    ...(page ? { page } : {}),
    ...(search ? { search } : {}),
    ...(category ? { category } : {}),
    ...(type ? { type } : {}),
    ...(level ? { level } : {}),
    ...(range ? { range } : {}),
    ...(salaryMin ? { salaryMin } : {}),
    ...(salaryMax ? { salaryMax } : {}),
  });

  return (
    <>
      <div className="flex justify-between">
        <p>
          Showing {data?.pagination.current_page}-{data?.pagination.total_pages}{' '}
          of {data?.data.length} results
        </p>
        <Sort sortBy={sortBy} />
      </div>

      <div className="mt-10 space-y-6">
        {data?.data.map((job) => <JobCard key={job.id} {...job} />)}
      </div>

      <Pagination {...data.pagination} />
    </>
  );
}
