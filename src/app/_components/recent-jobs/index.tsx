import { JobCard } from '@/components';
import { getJobs } from '@/data/services/job';

export default async function RecentJobs() {
  const jobs = await getJobs({ limit: 5 });

  return (
    <div className="mt-14 space-y-6">
      {jobs.data.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
