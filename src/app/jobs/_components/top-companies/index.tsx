import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getTopCompanies } from '@/data/services/company';

export default async function TopCompanies() {
  const companies = await getTopCompanies();

  return (
    <div className="mt-14 grid grid-cols-[300px] justify-center gap-6 sm:grid-cols-[repeat(2,300px)] xl:grid-cols-[repeat(4,300px)]">
      {companies.map((company) => (
        <div
          key={company.id}
          className="flex flex-col items-center gap-8 rounded-3xl bg-white px-10 py-12 shadow-card"
        >
          <div className="flex flex-col items-center gap-4">
            <Image
              src={company.logo ?? '/icons/image-not-found.svg'}
              width={60}
              height={60}
              alt="avatar-1"
              className="rounded-full"
            />
            <span className="line-clamp-1 text-center text-2xl font-semibold">
              {company.name}
            </span>
          </div>
          <p className="line-clamp-3 min-h-[72px] text-center text-black/80">
            {company.description}
          </p>
          <Badge>{company._count.jobs} open jobs</Badge>
        </div>
      ))}
    </div>
  );
}
