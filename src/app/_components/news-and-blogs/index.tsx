import { CenteredContainer, SectionHeader } from '@/components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowIcon } from '../../../../public/icons';

const newsAndBlogs = [
  {
    id: 1,
    type: 'news',
    date: '30 March 2024',
    title:
      'Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024',
    image: '/images/hero.png',
  },
  {
    id: 2,
    type: 'blogs',
    date: '30 March 2024',
    title: 'How to avoid the top six most common job interview mistakes',
    image: '/images/hero.png',
  },
];

export default function NewsAndBlogs() {
  return (
    <section>
      <CenteredContainer className="py-14">
        <SectionHeader
          main="News and Blog"
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />

        <div className="mt-14 flex flex-col gap-6 lg:flex-row">
          {newsAndBlogs.map((item) => (
            <div key={item.id} className="w-full">
              <div className="relative">
                <div className="absolute left-6 top-5">
                  <Badge className="rounded-xl bg-theme px-5 font-semibold capitalize text-white">
                    {item.type}
                  </Badge>
                </div>
                <Image
                  src={item.image}
                  width={0}
                  height={320}
                  sizes="100vw"
                  className="h-80 w-full rounded-[20px] object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOr08////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="news"
                />
              </div>

              <div className="mt-5">
                <span className="text-black/80">{item.date}</span>
                <h4 className="mb-2 mt-2 line-clamp-2 text-2xl font-semibold">
                  {item.title}
                </h4>
                <Button variant="link" className="p-0">
                  <span>Read more</span>
                  <ArrowIcon className="!h-5 !w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
