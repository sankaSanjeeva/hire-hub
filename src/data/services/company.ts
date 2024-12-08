import 'server-only';

import prisma from '@/lib/db';

export async function getTopCompanies() {
  return prisma.company.findMany({
    include: {
      _count: true,
    },
    orderBy: {
      jobs: {
        _count: 'desc',
      },
    },
    take: 4,
  });
}
