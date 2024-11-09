import { Button } from '@/components/ui/button';
import {
  CandidateIcon,
  ChevronIcon,
  CompanyIcon,
  LogoAdobeIcon,
  LogoAsanaIcon,
  LogoIcon,
  LogoLinearIcon,
  LogoSlackIcon,
  LogoSpotifyIcon,
  SearchIcon,
} from '../../../../public/icons';
import { CenteredContainer } from '@/components';

export default function Hero() {
  return (
    <section className="flex min-h-svh flex-col">
      <div className="flex flex-grow bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/hero.png')] bg-cover bg-fixed bg-center bg-no-repeat pt-20">
        <CenteredContainer className="flex flex-col items-center justify-center">
          <div className="py-10">
            <h1 className="text-center text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Find Your Dream Job Today!
            </h1>

            <h6 className="mt-3 text-center text-white/80 md:text-lg">
              Connecting Talent with Opportunity: Your Gateway to Career Success
            </h6>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white sm:w-[600px] lg:w-auto lg:flex-row">
            <input
              placeholder="Job Title or Company"
              className="h-20 w-full border-none px-5 outline-none placeholder:font-medium placeholder:text-black/50 lg:w-52"
            />
            <div className="mx-5 h-0.5 shrink-0 bg-[#C7C7C7] lg:mx-0 lg:my-auto lg:h-10 lg:w-0.5" />
            <button className="inline-flex h-20 w-full items-center justify-between gap-5 px-5 transition-opacity hover:opacity-70 lg:w-52">
              <span className="font-medium text-black/50">Select Location</span>
              <ChevronIcon className="!h-6 !w-6" />
            </button>
            <div className="mx-5 h-0.5 shrink-0 bg-[#C7C7C7] lg:mx-0 lg:my-auto lg:h-10 lg:w-0.5" />
            <button className="inline-flex h-20 w-full items-center justify-between gap-5 px-5 transition-opacity hover:opacity-70 lg:w-52">
              <span className="font-medium text-black/50">Select Category</span>
              <ChevronIcon className="!h-6 !w-6" />
            </button>
            <Button className="h-20 rounded-none px-7 text-lg">
              <SearchIcon />
              <span>Search Job</span>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-5 px-5 pb-10 pt-20 text-white">
            <div className="grid grid-cols-[60px_auto] gap-x-3">
              <div className="row-span-2 flex h-[60px] items-center justify-center rounded-full bg-theme">
                <LogoIcon />
              </div>
              <span className="text-xl font-bold leading-8">25,850</span>
              <span className="text-white/80">Jobs</span>
            </div>
            <div className="grid grid-cols-[60px_auto] gap-x-3">
              <div className="row-span-2 flex h-[60px] items-center justify-center rounded-full bg-theme">
                <CandidateIcon />
              </div>
              <span className="text-xl font-bold leading-8">10,250</span>
              <span className="text-white/80">Candidates</span>
            </div>
            <div className="grid grid-cols-[60px_auto] gap-x-3">
              <div className="row-span-2 flex h-[60px] items-center justify-center rounded-full bg-theme">
                <CompanyIcon />
              </div>
              <span className="text-xl font-bold leading-8">18,400</span>
              <span className="text-white/80">Companies</span>
            </div>
          </div>
        </CenteredContainer>
      </div>

      <div className="bg-black text-white">
        <CenteredContainer className="flex flex-wrap items-center justify-around">
          <div className="px-4 py-10">
            <LogoSpotifyIcon />
          </div>
          <div className="px-4 py-10">
            <LogoSlackIcon />
          </div>
          <div className="px-4 py-10">
            <LogoAdobeIcon />
          </div>
          <div className="px-4 py-10">
            <LogoAsanaIcon />
          </div>
          <div className="px-4 py-10">
            <LogoLinearIcon />
          </div>
        </CenteredContainer>
      </div>
    </section>
  );
}
