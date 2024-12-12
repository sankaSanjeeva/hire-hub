import { CenteredContainer, JobCard, SectionHeader } from '@/components';
import { getJob, getJobs } from '@/data/services/job';
import { JobOverview, MessageForm } from './_components';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function JobDetails({ params }: Props) {
  const { id } = await params;

  const job = await getJob(id);
  const relatedJobs = await getJobs({ limit: 3 });

  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white">Job Details</h1>
      </section>

      <CenteredContainer className="pb-28 pt-14">
        <section>
          <JobCard
            {...job!}
            action="apply"
            className="px-0 shadow-none lg:px-0"
          />
        </section>

        <section className="group grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
          <div>
            <div
              className="job-post-preview"
              dangerouslySetInnerHTML={{ __html: job?.description ?? '' }}
            />

            <SectionHeader
              main="Related Jobs"
              sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              className="mt-14"
            />

            <div className="mt-10 space-y-6">
              {relatedJobs.data.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>

          <aside className="w-full min-w-80 space-y-10">
            <JobOverview job={job!} />
            <MessageForm />
          </aside>
        </section>
      </CenteredContainer>
    </div>
  );
}
