import { CenteredContainer, SectionHeader } from '@/components';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function TopCompanies() {
  return (
    <section className="bg-theme/10">
      <CenteredContainer className="pb-28 pt-14">
        <SectionHeader
          main="Top Company"
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          className="text-center"
        />

        <div className="mt-14 grid grid-cols-[300px] justify-center gap-6 sm:grid-cols-[repeat(2,300px)] xl:grid-cols-[repeat(4,300px)]">
          {[1, 2, 3, 4].map((company) => (
            <div
              key={company}
              className="flex flex-col items-center gap-8 rounded-3xl bg-white px-10 py-12 shadow-card"
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="https://i.pravatar.cc/150?img=67"
                  width={60}
                  height={60}
                  alt="avatar-1"
                  className="rounded-full"
                />
                <span className="text-2xl font-semibold">Tesla</span>
              </div>
              <p className="line-clamp-3 text-center text-black/80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam quidem
              </p>
              <Badge>8 open jobs</Badge>
            </div>
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
