import { subDays, subHours } from 'date-fns';
import { EmploymentType, ExperienceLevel, Prisma } from '@prisma/client';
import { JobFilters, JobWithCompany } from '@/types';
import { getPaginatedData } from '@/lib/utils';
import prisma from '@/lib/db';

const limit = 10;

export async function getJobs({
  page,
  sortBy,
  search,
  category,
  type,
  level,
  range,
  salaryMin,
  salaryMax,
}: JobFilters) {
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

  const categories = category?.split(',');
  const types = type?.split(',');
  const levels = level?.split(',');

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
        ...(salaryMin ? [{ salary: { gte: Number(salaryMin) } }] : []),
        ...(salaryMax ? [{ salary: { lte: Number(salaryMax) } }] : []),
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
    skip: ((page ?? 1) - 1) * limit,
    take: limit,
  };

  const [jobs, count] = await prisma.$transaction([
    prisma.job.findMany(query),
    prisma.job.count({ where: query.where }),
  ]);

  return {
    data: jobs as JobWithCompany[],
    pagination: getPaginatedData(page ?? 1, limit, count),
  };
}
