import 'server-only';

import prisma from '@/lib/db';

export async function getTopJobCategories() {
  return prisma.jobCategory.findMany({
    include: {
      _count: true,
    },
    orderBy: {
      jobs: {
        _count: 'desc',
      },
    },
    take: 8,
  });
}
