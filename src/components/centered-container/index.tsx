import React from 'react';
import { cn } from '@/lib/utils';

export default function CenteredContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto max-w-screen-xl px-5 sm:px-16', className)}
      {...props}
    />
  );
}
