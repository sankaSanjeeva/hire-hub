import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CenteredContainer, JobCard, SectionHeader } from '@/components';
import prisma from '@/lib/db';

export default async function RecentJobs() {
  const jobs = await prisma.job.findMany({
    orderBy: {
      postedDate: 'desc',
    },
    include: {
      company: {
        include: {
          location: true,
        },
      },
      category: true,
      location: true,
    },
    take: 5,
  });

  return (
    <section>
      <CenteredContainer className="py-14">
        <div className="flex items-end">
          <SectionHeader
            main="Recent Jobs Available"
            sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            className="flex-grow"
          />
          <Link href="jobs">
            <Button variant="link" className="text-xl">
              View All
            </Button>
          </Link>
        </div>

        <div className="mt-14 space-y-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
