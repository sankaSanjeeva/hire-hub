import Link from 'next/link';
import Image from 'next/image';
import { formatDistance } from 'date-fns';
import { EmploymentTypeDisplay } from '@/constants/enum-mapping';
import { JobWithCompany } from '@/types';
import { cn, formatAddress } from '@/lib/utils';
import {
  BookmarkIcon,
  BriefcaseIcon,
  ClockIcon,
  LocationIcon,
  WalletIcon,
} from '../../../public/icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface Props extends JobWithCompany {
  action?: 'view' | 'apply';
  className?: string;
}

export default function JobCard({
  id,
  title,
  company,
  category,
  employmentType,
  salary,
  location,
  postedDate,
  action = 'view',
  className,
}: Props) {
  const jobLocation = location ?? company.location;

  return (
    <div className={cn('rounded-2xl p-5 shadow-card lg:p-10', className)}>
      <div className="flex justify-between">
        <div>
          {postedDate && (
            <Badge>
              {formatDistance(postedDate, new Date(), {
                addSuffix: true,
              })}
            </Badge>
          )}
        </div>
        <button type="button" className="p-1">
          <BookmarkIcon />
        </button>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-[auto_1fr]">
        <div className="row-span-2">
          <Image
            src="/icons/image-not-found.svg"
            width={40}
            height={40}
            alt="company-logo"
            placeholder="blur"
            blurDataURL="/icons/image-not-found.svg"
          />
        </div>
        <h2 className="text-3xl font-semibold leading-none">{title}</h2>
        <span className="leading-none">{company.name}</span>
      </div>

      <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex w-full flex-col flex-wrap gap-x-6 gap-y-4 sm:flex-row">
          <div className="flex gap-3">
            <BriefcaseIcon />
            <span className="font-semibold text-gray-500">{category.name}</span>
          </div>
          <div className="flex gap-3">
            <ClockIcon />
            <span className="font-semibold text-gray-500">
              {EmploymentTypeDisplay[employmentType]}
            </span>
          </div>
          {salary && (
            <div className="flex gap-3">
              <WalletIcon />
              <span className="font-semibold text-gray-500">Rs. {salary}</span>
            </div>
          )}
          {jobLocation && (
            <div className="flex gap-3">
              <LocationIcon className="h-6 w-6 text-theme" />
              <span className="font-semibold text-gray-500">
                {formatAddress(jobLocation)}
              </span>
            </div>
          )}
        </div>
        {action === 'view' && (
          <Link href={`/jobs/${id}`}>
            <Button size="sm" className="w-full sm:w-auto">
              Job Details
            </Button>
          </Link>
        )}
        {action === 'apply' && (
          <Link href={`/jobs/${id}/apply`}>
            <Button className="w-full sm:w-auto lg:w-80">Apply Job</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
