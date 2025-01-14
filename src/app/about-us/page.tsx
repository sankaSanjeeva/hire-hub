import { CenteredContainer } from '@/components';
import { NewsAndBlogs } from '../_components';
import { FAQ, Flow, Hero } from './_components';

export default function AboutUs() {
  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl text-white">About Us</h1>
      </section>

      <CenteredContainer className="space-y-20 pt-20">
        <Hero />
        <Flow />
        <FAQ />
      </CenteredContainer>

      <NewsAndBlogs />
    </div>
  );
}
