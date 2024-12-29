import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  EmploymentTypeDisplay,
  ExperienceLevelDisplay,
} from '@/constants/enum-mapping';
import { getJobFilters } from '@/data/services/job';
import {
  CheckBoxItem,
  LocationSelect,
  RadioGroupItem,
  SalaryRangeInput,
  Search,
} from './components';

export default async function Filter({ className }: { className?: string }) {
  const [
    categories,
    employmentTypeJobs,
    experienceLevelJobs,
    jobsByPostedDate,
  ] = await getJobFilters();

  return (
    <aside
      className={cn(
        'sticky top-[74px] h-fit max-w-80 space-y-6 rounded-3xl bg-theme/10 px-5 py-10',
        className
      )}
    >
      <Suspense>
        <Search />
      </Suspense>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Location</span>
        <LocationSelect />
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Category</span>
        <ul className="space-y-3">
          {categories.map((category) => (
            <Suspense key={category.id}>
              <CheckBoxItem
                id={category.id}
                name={category.name}
                count={category._count.jobs}
                paramName="category"
              />
            </Suspense>
          ))}
        </ul>
        <Button className="w-full">Show More</Button>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Job Type</span>
        <ul className="space-y-3">
          {employmentTypeJobs.map((type) => (
            <Suspense key={type.employmentType}>
              <CheckBoxItem
                id={type.employmentType}
                name={EmploymentTypeDisplay[type.employmentType]}
                count={type._count}
                paramName="type"
              />
            </Suspense>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">
          Experience Level
        </span>
        <ul className="space-y-3">
          {experienceLevelJobs.map((level) => (
            <Suspense key={level.experienceLevel}>
              <CheckBoxItem
                id={level.experienceLevel}
                name={ExperienceLevelDisplay[level.experienceLevel]}
                count={level._count}
                paramName="level"
              />
            </Suspense>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Date Posted</span>
        <Suspense>
          <RadioGroupItem
            items={jobsByPostedDate.map(({ range, count }) => ({
              name: range,
              count: Number(count),
            }))}
            paramName="range"
            defaultValue="All"
          />
        </Suspense>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Salary</span>
        <ul className="space-y-3">
          <Suspense>
            <SalaryRangeInput />
          </Suspense>
        </ul>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Tags</span>
        <div className="flex flex-wrap gap-3">
          {[
            'engineering',
            'design',
            'ui/ux',
            'marketing',
            'management',
            'construction',
          ].map((tag) => (
            <Badge key={tag} className="rounded-xl">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
}
