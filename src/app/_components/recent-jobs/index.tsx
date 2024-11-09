import { CenteredContainer, JobCard } from '@/components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RecentJobs() {
  return (
    <section>
      <CenteredContainer className="py-14">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Recent Jobs Available</h1>
          <div className="flex items-center justify-between">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <Link href="jobs">
              <Button variant="link" className="text-xl">
                View All
              </Button>
            </Link>
          </div>
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
