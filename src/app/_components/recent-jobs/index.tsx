import { CenteredContainer, JobCard, SectionHeader } from '@/components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RecentJobs() {
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
          {Array.from({ length: 5 }, (_, k) => k + 1).map((item) => (
            <JobCard key={item} />
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
