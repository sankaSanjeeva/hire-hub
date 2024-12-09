import { Prisma } from '@prisma/client';

export type PaginatedResult<T> = {
  data: T[];
  pagination: {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
  };
};

export type JobFilters = {
  page?: number;
  sortBy?: string;
  search?: string;
  city?: string;
  category?: string;
  type?: string;
  level?: string;
  range?: string;
  salaryMin?: string;
  salaryMax?: string;
  limit?: number;
};

export type JobWithCompany = Prisma.JobGetPayload<{
  include: {
    company: {
      include: {
        location: true;
      };
    };
    category: true;
    location: true;
  };
}>;
