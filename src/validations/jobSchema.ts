import { EmploymentType, ExperienceLevel, JobStatus } from '@prisma/client';
import { z } from 'zod';

export const jobSchema = z.object({
  title: z
    .string()
    .min(2, 'Title must be at least 2 characters')
    .max(50, 'Title must be at most 50 characters'),
  description: z
    .string()
    .max(1000, 'Description must be at most 1000 characters'),
  salary: z.number({ coerce: true }).optional(),
  status: z.nativeEnum(JobStatus),
  employmentType: z.nativeEnum(EmploymentType),
  experienceLevel: z.nativeEnum(ExperienceLevel),
  companyId: z.string().cuid(),
  categoryId: z.string().cuid(),
});

export type JobSchemaType = z.infer<typeof jobSchema>;

export type JobSchemaErrorType = z.inferFlattenedErrors<typeof jobSchema>;
