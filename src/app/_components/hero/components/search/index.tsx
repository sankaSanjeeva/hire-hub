import Form from 'next/form';
import { Button } from '@/components/ui/button';
import { cities } from '@/constants/cities';
import { ChevronIcon, SearchIcon } from '../../../../../../public/icons';

export default async function Search() {
  return (
    <Form
      action="/jobs"
      className="flex w-full flex-col overflow-hidden rounded-2xl bg-white text-black/75 sm:w-[500px] lg:w-auto lg:flex-row"
    >
      <input
        name="search"
        autoComplete="off"
        placeholder="Job Title or Company"
        className="h-20 w-full border-none px-5 outline-none placeholder:font-medium placeholder:text-black/50 lg:w-60"
      />

      <div className="mx-5 h-0.5 shrink-0 bg-[#C7C7C7] lg:mx-0 lg:my-auto lg:h-10 lg:w-0.5" />

      <div className="relative lg:w-60 [&:hover>label]:block [&>label]:hidden">
        <input
          id="city"
          list="cities"
          name="city"
          autoComplete="off"
          placeholder="City"
          className="h-20 w-full border-none pl-5 pr-10 outline-none placeholder:font-medium placeholder:text-black/50 [&::-webkit-calendar-picker-indicator]:!hidden"
        />
        <datalist id="cities">
          {cities.map(({ city, province }) => (
            <option value={city} key={city}>
              {province}
            </option>
          ))}
        </datalist>
        <label
          htmlFor="city"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <ChevronIcon className="text-black/50" />
        </label>
      </div>

      {/* <div className="mx-5 h-0.5 shrink-0 bg-[#C7C7C7] lg:mx-0 lg:my-auto lg:h-10 lg:w-0.5" />

      <button
        type="button"
        className="inline-flex h-20 w-full items-center justify-between gap-5 px-5 text-black/50 transition-opacity hover:opacity-70 lg:w-52"
      >
        <span className="font-medium">Select Category</span>
        <ChevronIcon />
      </button> */}

      <Button type="submit" className="h-20 rounded-none px-7 text-lg lg:w-60">
        <SearchIcon />
        <span>Search Job</span>
      </Button>
    </Form>
  );
}
