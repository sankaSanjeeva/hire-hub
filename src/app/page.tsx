import Link from 'next/link';
import { CenteredContainer, SectionHeader } from '@/components';
import {
  Categories,
  CategoriesSkeleton,
  Hero,
  Info,
  NewsAndBlogs,
  RecentJobs,
  RecentJobsSkeleton,
  Reviews,
} from './_components';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero />

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

        <Suspense fallback={<RecentJobsSkeleton />}>
          <RecentJobs />
        </Suspense>
      </CenteredContainer>

      <div className="bg-theme/10">
        <CenteredContainer className="pb-20 pt-14">
          <SectionHeader
            main="Browse by Category"
            sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            className="text-center"
          />

          <Suspense fallback={<CategoriesSkeleton />}>
            <Categories />
          </Suspense>
        </CenteredContainer>
      </div>

      <Info />
      <Reviews />
      <NewsAndBlogs />
    </>
  );
}
