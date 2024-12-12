import { PaginatedResult } from '@/types';
import { Location } from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPaginatedData(
  page: number,
  limit: number,
  count: number
): PaginatedResult<unknown>['pagination'] {
  return {
    total_records: count,
    current_page: page,
    total_pages: Math.ceil(count / limit),
    next_page: page * limit >= count ? null : page + 1,
    prev_page: page > 0 ? page - 1 : null,
  };
}

export const formatAddress = ({ addressLine1, addressLine2, city }: Location) =>
  `${addressLine1 ? addressLine1 : ''}${addressLine2 ? `, ${addressLine2}` : ''}${city ? `, ${city}` : ''}`;
