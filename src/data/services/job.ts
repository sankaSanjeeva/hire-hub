import 'server-only';

import { subDays, subHours } from 'date-fns';
import { EmploymentType, ExperienceLevel, Prisma } from '@prisma/client';
import { JobFilters, JobWithCompany } from '@/types';
import { getPaginatedData } from '@/lib/utils';
import prisma from '@/lib/db';

export async function getJobs({
  page,
  sortBy,
  search,
  city,
  category,
  type,
  level,
  range,
  salaryMin,
  salaryMax,
  limit = 10,
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
          OR: search
            ? [
                {
                  title: { contains: search, mode: 'insensitive' },
                },
                {
                  company: {
                    name: { contains: search, mode: 'insensitive' },
                  },
                },
              ]
            : [],
        },
        {
          OR: city
            ? [
                {
                  location: {
                    city: { contains: city, mode: 'insensitive' },
                  },
                },
                {
                  company: {
                    location: {
                      city: { contains: city, mode: 'insensitive' },
                    },
                  },
                },
              ]
            : [],
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

export async function getJob(id: string) {
  const job = await prisma.job.findUnique({
    where: { id },
    include: {
      company: {
        include: {
          location: true,
        },
      },
      category: true,
      location: true,
    },
  });

  return job;
}

export async function getJobFilters() {
  const getCategories = prisma.jobCategory.findMany({
    include: {
      _count: true,
    },
    where: {
      jobs: {
        some: {},
      },
    },
    take: 5,
  });

  const getEmploymentTypeJobs = prisma.job.groupBy({
    by: ['employmentType'],
    _count: true,
  });

  const getExperienceLevelJobs = prisma.job.groupBy({
    by: ['experienceLevel'],
    _count: true,
  });

  const getJobsByPostedDate = prisma.$queryRaw<
    { range: string; count: bigint }[]
  >`
    SELECT
      ranges.range_name as range,
      COUNT(*) AS count
    FROM "Job"
    CROSS JOIN (
      VALUES 
        ('Last Hour'),
        ('Last 24 Hours'),
        ('Last 7 Days'),
        ('Last 30 Days'),
        ('All')
    ) AS ranges(range_name)
    WHERE 
      CASE 
        WHEN ranges.range_name = 'Last Hour' THEN "postedDate" >= NOW() - INTERVAL '1 hour'
        WHEN ranges.range_name = 'Last 24 Hours' THEN "postedDate" >= NOW() - INTERVAL '24 hours'
        WHEN ranges.range_name = 'Last 7 Days' THEN "postedDate" >= NOW() - INTERVAL '7 days'
        WHEN ranges.range_name = 'Last 30 Days' THEN "postedDate" >= NOW() - INTERVAL '30 days'
        WHEN ranges.range_name = 'All' THEN TRUE
      END
    GROUP BY ranges.range_name
    ORDER BY 
      CASE ranges.range_name
        WHEN 'Last Hour' THEN 1
        WHEN 'Last 24 Hours' THEN 2
        WHEN 'Last 7 Days' THEN 3
        WHEN 'Last 30 Days' THEN 4
        ELSE 5
      END;
  `;

  return prisma.$transaction([
    getCategories,
    getEmploymentTypeJobs,
    getExperienceLevelJobs,
    getJobsByPostedDate,
  ]);
}
