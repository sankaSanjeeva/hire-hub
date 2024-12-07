import {
  Categories,
  Hero,
  Info,
  NewsAndBlogs,
  RecentJobs,
  Reviews,
} from './_components';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero />
      <RecentJobs />
      <Categories />
      <Info />
      <Reviews />
      <NewsAndBlogs />
    </>
  );
}
