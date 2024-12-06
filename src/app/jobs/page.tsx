import { Overview, TopCompanies } from './_components';

export const dynamic = 'force-dynamic';

export default function Jobs() {
  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white">Jobs</h1>
      </section>
      <Overview />
      <TopCompanies />
    </div>
  );
}
