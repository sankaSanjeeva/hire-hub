import { SectionHeader } from '@/components';
import { BriefcaseIcon, CheckIcon, DocumentIcon, UserIcon } from './icons';

export default function Flow() {
  return (
    <section>
      <SectionHeader
        main="How it works"
        sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        className="text-center"
      />

      <div className="mt-14 grid grid-cols-[300px] justify-center gap-6 sm:grid-cols-[repeat(2,300px)] xl:grid-cols-[repeat(4,300px)]">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-white px-10 py-12 shadow-card">
          <div className="flex flex-col items-center gap-5">
            <UserIcon className="h-10 w-10 text-theme" />
            <span className="line-clamp-1 text-center text-2xl font-semibold">
              Create Account
            </span>
          </div>
          <p className="line-clamp-2 text-center text-black/80">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 rounded-3xl bg-white px-10 py-12 shadow-card">
          <div className="flex flex-col items-center gap-5">
            <DocumentIcon className="h-10 w-10 text-theme" />
            <span className="line-clamp-1 text-center text-2xl font-semibold">
              Upload Resume
            </span>
          </div>
          <p className="line-clamp-2 text-center text-black/80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
            nihil saepe minus iure corporis magnam ipsa!
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 rounded-3xl bg-white px-10 py-12 shadow-card">
          <div className="flex flex-col items-center gap-5">
            <BriefcaseIcon className="h-10 w-10 text-theme" />
            <span className="line-clamp-1 text-center text-2xl font-semibold">
              Upload Resume
            </span>
          </div>
          <p className="line-clamp-2 text-center text-black/80">
            Lorem ipsum dolor sit
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 rounded-3xl bg-white px-10 py-12 shadow-card">
          <div className="flex flex-col items-center gap-5">
            <CheckIcon className="h-10 w-10 text-theme" />
            <span className="line-clamp-1 text-center text-2xl font-semibold">
              Upload Resume
            </span>
          </div>
          <p className="line-clamp-2 text-center text-black/80">
            Lorem ipsum dolor sit amet consectetur, adipisicing
          </p>
        </div>
      </div>
    </section>
  );
}
