'use server';

import { redirect } from 'next/navigation';
import prisma from '@/lib/db';
import {
  jobSchema,
  JobSchemaErrorType,
  JobSchemaType,
} from '@/validations/jobSchema';

type State = {
  data?: JobSchemaType;
  errors?: JobSchemaErrorType;
};

export async function createJob(_prevState: State, formData: FormData) {
  const data = Object.fromEntries(formData) as unknown as JobSchemaType;
  const validation = jobSchema.safeParse(data);

  if (!validation.success) {
    return {
      data,
      errors: validation.error.formErrors,
    };
  }

  await prisma.job.create({
    data: {
      title: data.title,
      employmentType: data.employmentType,
      experienceLevel: data.experienceLevel,
      salary: data.salary ? Number(data.salary) : null,
      description: data.description,
      company: {
        connect: {
          id: data.companyId,
        },
      },
      category: {
        connect: {
          id: data.categoryId,
        },
      },
      postedDate: new Date(),
    },
  });

  redirect('/jobs');
}
