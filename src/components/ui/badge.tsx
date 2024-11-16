import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-lg p-2 transition-colors leading-none',
  {
    variants: {
      variant: {
        default: 'bg-theme/10 text-theme',
        destructive: 'bg-red-500/10 text-red-500',
        outline: 'border border-theme text-theme',
        quantity: 'rounded-xl bg-white py-1 text-gray-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
