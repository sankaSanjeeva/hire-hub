import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getTopJobCategories } from '@/data/services/job-category';

export default async function Categories() {
  const categories = await getTopJobCategories();

  return (
    <div className="mt-14 flex flex-wrap justify-center gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/jobs?category=${category.id}`}>
          <div className="flex h-[280px] w-[300px] flex-col items-center justify-between rounded-3xl bg-white p-14 shadow-card">
            <Image
              src="/icons/categories/agriculture.svg"
              width={40}
              height={40}
              alt={category.name}
            />
            <h2 className="line-clamp-2 w-[188px] text-center">
              {category.name}
            </h2>
            <Badge>{category._count.jobs} jobs</Badge>
          </div>
        </Link>
      ))}
    </div>
  );
}
