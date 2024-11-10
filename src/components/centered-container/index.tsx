import React from 'react';
import { cn } from '@/lib/utils';

export default function CenteredContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mx-auto max-w-[1440px] px-5 sm:px-10 md:px-16 lg:px-[72px]',
        className
      )}
      {...props}
    />
  );
}
