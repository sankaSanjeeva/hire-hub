import { JobCard } from '@/components';
import { getJobs } from '@/data/services/job';
import { Pagination, Sort } from './components';
import { JobFilters } from '@/types';

interface Props {
  searchParams: Promise<JobFilters>;
}

export default async function Result({ searchParams }: Props) {
  const {
    sortBy,
    page,
    search,
    category,
    type,
    level,
    range,
    salaryMin,
    salaryMax,
  } = await searchParams;

  const data = await getJobs({
    sortBy,
    page,
    search,
    category,
    type,
    level,
    range,
    salaryMin,
    salaryMax,
  });

  return (
    <>
      <div className="flex justify-between">
        <p>
          Showing {data?.pagination.current_page}-{data?.pagination.total_pages}{' '}
          of {data?.data.length} results
        </p>
        <Sort />
      </div>

      <div className="mt-10 space-y-6 group-has-[[data-pending]]:animate-pulse">
        {data?.data.map((job) => <JobCard key={job.id} {...job} />)}
      </div>

      <Pagination {...data.pagination} />
    </>
  );
}
