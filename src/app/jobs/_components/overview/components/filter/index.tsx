import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LocationIcon, SearchIcon } from '../../../../../../../public/icons';

export default function Filter({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        'sticky top-[74px] h-fit max-w-80 space-y-6 rounded-[20px] bg-theme/10 px-5 py-10',
        className
      )}
    >
      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">
          Search by Job Title
        </span>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <Input
            className="rounded-xl pl-10"
            placeholder="Job title or company"
          />
        </div>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Location</span>
        <div className="relative">
          <LocationIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <Input
            className="rounded-xl pl-10"
            placeholder="Job title or company"
          />
        </div>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Category</span>
        <ul className="space-y-3">
          {[1, 2, 3, 4, 5].map((x) => (
            <li className="flex items-center gap-2" key={x}>
              <Checkbox id={`category-${x}`} />
              <div className="flex-grow">
                <label htmlFor={`category-${x}`}>Commerce</label>
              </div>
              <Badge variant="quantity">10</Badge>
            </li>
          ))}
        </ul>
        <Button className="w-full">Show More</Button>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Job Type</span>
        <ul className="space-y-3">
          {[1, 2, 3, 4, 5].map((x) => (
            <li className="flex items-center gap-2" key={x}>
              <Checkbox id={`job-type-${x}`} />
              <div className="flex-grow">
                <label htmlFor={`job-type-${x}`}>Full Time</label>
              </div>
              <Badge variant="quantity">10</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">
          Experience Level
        </span>
        <ul className="space-y-3">
          {[1, 2, 3, 4].map((x) => (
            <li className="flex items-center gap-2" key={x}>
              <Checkbox id={`xp-${x}`} />
              <div className="flex-grow">
                <label htmlFor={`xp-${x}`}>Fresher</label>
              </div>
              <Badge variant="quantity">10</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Date Posted</span>
        <ul className="space-y-3">
          {[1, 2, 3, 4].map((x) => (
            <li className="flex items-center gap-2" key={x}>
              <Checkbox id={`date-${x}`} />
              <div className="flex-grow">
                <label htmlFor={`date-${x}`}>Fresher</label>
              </div>
              <Badge variant="quantity">10</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <span className="text-xl font-semibold leading-none">Tags</span>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((x) => (
            <Badge key={x} className="rounded-xl">
              badge
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
}
