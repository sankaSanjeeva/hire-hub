import { NextRequest } from 'next/server';
import prisma from '@/lib/db';
import { EmploymentType, ExperienceLevel } from '@prisma/client';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get('search') ?? '';
  const categories = searchParams.get('category')?.split(',');
  const types = searchParams.get('type')?.split(',');
  const levels = searchParams.get('level')?.split(',');

  const jobs = await prisma.job.findMany({
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
    take: 10,
  });

  return Response.json(jobs);
}
