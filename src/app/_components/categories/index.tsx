import { CenteredContainer, SectionHeader } from '@/components';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'Agriculture',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 2,
    name: 'Metal Products',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 3,
    name: 'Commerce',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 4,
    name: 'Construction',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 5,
    name: 'Hotel & Tourism',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 6,
    name: 'Education',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 7,
    name: 'Financial Services',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
  {
    id: 8,
    name: 'Transport',
    jobCount: 1254,
    icon: '/icons/categories/agriculture.svg',
  },
];

export default function Categories() {
  return (
    <div className="bg-theme/10">
      <CenteredContainer className="pb-20 pt-14">
        <SectionHeader
          main="Browse by Category"
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          className="text-center"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex h-[280px] w-[300px] flex-col items-center justify-between rounded-[20px] bg-white p-14 shadow-[0_4px_8px_0_white] shadow-theme/10"
            >
              <Image
                src={category.icon}
                width={40}
                height={40}
                alt={category.name}
              />
              <h3 className="line-clamp-2 w-[188px] text-center text-2xl font-bold">
                {category.name}
              </h3>
              <Badge>{category.jobCount} jobs</Badge>
            </div>
          ))}
        </div>
      </CenteredContainer>
    </div>
  );
}
