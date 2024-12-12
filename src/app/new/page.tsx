import prisma from '@/lib/db';
import { CenteredContainer } from '@/components';
import { CreateJobForm } from './_components';

export default async function New() {
  const categories = await prisma.jobCategory.findMany();

  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white">Create Job</h1>
      </section>

      <section>
        <CenteredContainer className="py-20">
          <CreateJobForm categories={categories} />
        </CenteredContainer>
      </section>
    </div>
  );
}
