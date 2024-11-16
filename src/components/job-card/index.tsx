import Image from 'next/image';
import {
  BookmarkIcon,
  BriefcaseIcon,
  ClockIcon,
  LocationIcon,
  WalletIcon,
} from '../../../public/icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function JobCard() {
  return (
    <div className="rounded-2xl p-5 shadow-[0_4px_8px_0_white] shadow-theme/10 lg:p-10">
      <div className="flex justify-between">
        <Badge>10 min ago</Badge>
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
        <h3 className="text-3xl font-semibold leading-none">
          Forward Security Director
        </h3>
        <span className="leading-none">Bauch, Schuppe and Schulist Co</span>
      </div>

      <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex w-full flex-col flex-wrap gap-x-6 gap-y-4 sm:flex-row">
          <div className="flex gap-3">
            <BriefcaseIcon />
            <span className="font-semibold text-gray-500">
              Hotels & Tourism
            </span>
          </div>
          <div className="flex gap-3">
            <ClockIcon />
            <span className="font-semibold text-gray-500">Full time</span>
          </div>
          <div className="flex gap-3">
            <WalletIcon />
            <span className="font-semibold text-gray-500">$40000-$42000</span>
          </div>
          <div className="flex gap-3">
            <LocationIcon className="h-6 w-6 text-theme" />
            <span className="font-semibold text-gray-500">New-York, USA</span>
          </div>
        </div>
        <Button size="sm" className="w-full sm:w-auto">
          Job Details
        </Button>
      </div>
    </div>
  );
}
