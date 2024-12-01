import Image from 'next/image';
import { formatDistance } from 'date-fns';
import { Location, Prisma } from '@prisma/client';
import { EmploymentTypeDisplay } from '@/constants/enum-mapping';
import {
  BookmarkIcon,
  BriefcaseIcon,
  ClockIcon,
  LocationIcon,
  WalletIcon,
} from '../../../public/icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

type JobWithCompany = Prisma.JobGetPayload<{
  include: {
    company: {
      include: {
        location: true;
      };
    };
    category: true;
    location: true;
  };
}>;

const formatAddress = ({ addressLine1, addressLine2, city }: Location) =>
  `${addressLine1 ? addressLine1 : ''}${addressLine2 ? `, ${addressLine2}` : ''}${city ? `, ${city}` : ''}`;

export default function JobCard({
  title,
  company,
  category,
  employmentType,
  salary,
  location,
  postedDate,
}: JobWithCompany) {
  const jobLocation = location ?? company.location;

  return (
    <div className="rounded-2xl p-5 shadow-card lg:p-10">
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
        <h3 className="text-3xl font-semibold leading-none">{title}</h3>
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
        <Button size="sm" className="w-full sm:w-auto">
          Job Details
        </Button>
      </div>
    </div>
  );
}
