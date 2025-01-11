import { ReactNode } from 'react';
import { JobWithCompany } from '@/types';
import {
  EmploymentTypeDisplay,
  ExperienceLevelDisplay,
} from '@/constants/enum-mapping';
import { formatAddress } from '@/lib/utils';
import {
  BriefcaseIcon,
  ClockIcon,
  LocationIcon,
  UserIcon,
} from '../../../../../../public/icons';
import { DegreeIcon, RewardIcon, Wallet2Icon } from './icons';

interface Props {
  job?: JobWithCompany;
}

function JobOverviewItem({
  title,
  value,
  icon,
}: {
  title: string;
  value?: string;
  icon: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1">
      <div className="row-span-2">{icon}</div>
      <span className="font-semibold leading-none">{title}</span>
      <span className="min-h-4 leading-none text-gray-500">{value}</span>
    </div>
  );
}

export default function JobOverview({ job }: Props) {
  return (
    <div className="space-y-7 rounded-3xl bg-theme/10 px-5 py-10">
      <h3>Job Overview</h3>

      <JobOverviewItem
        title="Job Title"
        value={job?.title}
        icon={<UserIcon className="h-6 w-6 text-theme" />}
      />

      {job?.employmentType && (
        <JobOverviewItem
          title="Job Type"
          value={EmploymentTypeDisplay[job.employmentType]}
          icon={<ClockIcon />}
        />
      )}

      <JobOverviewItem
        title="Category"
        value={job?.category.name}
        icon={<BriefcaseIcon />}
      />

      {job?.experienceLevel && (
        <JobOverviewItem
          title="Experience"
          value={ExperienceLevelDisplay[job.experienceLevel]}
          icon={<RewardIcon />}
        />
      )}

      <JobOverviewItem title="Education" value="" icon={<DegreeIcon />} />

      {job?.salary && (
        <JobOverviewItem
          title="Offered  Salary"
          // TODO: Add salary as a range
          // value={`${job?.salaryMin} - ${job?.salaryMax}`}
          value={`Rs. ${job.salary}`}
          icon={<Wallet2Icon />}
        />
      )}

      {/* TODO: Add gender */}
      {/* <JobOverviewItem title="Gender" value="" icon={<BriefcaseIcon />} /> */}

      <JobOverviewItem
        title="Location"
        value={formatAddress((job?.location ?? job?.company.location)!)}
        icon={<LocationIcon className="h-6 w-6 text-theme" />}
      />
    </div>
  );
}
