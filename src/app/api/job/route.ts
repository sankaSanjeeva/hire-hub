import { NextRequest } from 'next/server';
import { subDays, subHours } from 'date-fns';
import { EmploymentType, ExperienceLevel, Prisma } from '@prisma/client';
import { getPaginatedData } from '@/lib/utils';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = Number(searchParams.get('page') ?? '1');
  const limit = Number(searchParams.get('limit') ?? '10');
  const sortBy = searchParams.get('sortBy');
  const search = searchParams.get('search') ?? '';
  const categories = searchParams.get('category')?.split(',');
  const types = searchParams.get('type')?.split(',');
  const levels = searchParams.get('level')?.split(',');
  const range = searchParams.get('range');
  const salaryMin = searchParams.get('salaryMin');
  const salaryMax = searchParams.get('salaryMax');

  const getDateRange = () => {
    switch (range) {
      case 'Last Hour':
        return subHours(new Date(), 1);
      case 'Last 24 Hours':
        return subDays(new Date(), 1);
      case 'Last 7 Days':
        return subDays(new Date(), 7);
      case 'Last 30 Days':
        return subDays(new Date(), 30);

      default:
        return null;
    }
  };

  const query: Prisma.JobFindManyArgs = {
    where: {
      AND: [
        {
          OR: [
            {
              title: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              company: {
                name: {
                  contains: search,
                  mode: 'insensitive',
                },
              },
            },
          ],
        },
        {
          OR: categories?.map((categoryId) => ({ categoryId })),
        },
        {
          OR: types?.map((type) => ({
            employmentType: type as EmploymentType,
          })),
        },
        {
          OR: levels?.map((level) => ({
            experienceLevel: level as ExperienceLevel,
          })),
        },
        ...(getDateRange()
          ? [
              {
                postedDate: {
                  gt: getDateRange()!,
                },
              },
            ]
          : []),
        ...(salaryMin ? [{ salary: { gt: Number(salaryMin) } }] : []),
        ...(salaryMax ? [{ salary: { gt: Number(salaryMax) } }] : []),
      ],
    },
    include: {
      company: {
        include: {
          location: true,
        },
      },
      category: true,
      location: true,
    },
    orderBy: {
      postedDate: sortBy === 'asc' ? 'asc' : 'desc',
    },
    skip: (page - 1) * limit,
    take: limit,
  };

  const [jobs, count] = await prisma.$transaction([
    prisma.job.findMany(query),
    prisma.job.count({ where: query.where }),
  ]);

  return Response.json({
    data: jobs,
    pagination: getPaginatedData(page, limit, count),
  });
}
