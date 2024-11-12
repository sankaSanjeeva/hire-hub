import { CenteredContainer, SectionHeader } from '@/components';
import { Button } from '@/components/ui/button';

export default function Info() {
  return (
    <section>
      <CenteredContainer className="pb-14 pt-24">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <div className="h-[250px] w-full flex-shrink-0 bg-[url('/images/team-work.png')] bg-contain bg-center bg-no-repeat md:h-[300px] lg:h-[350px] lg:w-[500px] xl:w-[650px]" />
          <div className="flex flex-grow flex-col justify-center gap-14">
            <SectionHeader
              main="Good Life Begins With A Good Company"
              sub="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati nihil molestiae, excepturi consectetur odit maiores rerum vel nisi libero deleniti dolore veniam, fugiat ullam at rem quam vitae tempore."
            />
            <div className="space-x-5">
              <Button>Search Jobs</Button>
              <Button variant="link">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-10 text-center sm:grid-cols-3 sm:text-left lg:gap-x-20">
          <div className="space-y-5">
            <h2 className="text-5xl font-bold text-theme">12k+</h2>
            <h4 className="text-2xl font-semibold">Clients worldwide</h4>
            <p className="text-black/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium id impedit voluptatem
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-5xl font-bold text-theme">20k+</h2>
            <h4 className="text-2xl font-semibold">Active resume</h4>
            <p className="text-black/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium id impedit voluptatem
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-5xl font-bold text-theme">18k+</h2>
            <h4 className="text-2xl font-semibold">Companies</h4>
            <p className="text-black/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium id impedit voluptatem
            </p>
          </div>
        </div>
      </CenteredContainer>
    </section>
  );
}
