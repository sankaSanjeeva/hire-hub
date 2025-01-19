'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

export default function RedirectLink({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const searchParams = useSearchParams();

  const href = searchParams.get('redirect')
    ? `${path}?redirect=${encodeURIComponent(searchParams.get('redirect')!)}`
    : path;

  return (
    <Link className="underline" href={href}>
      {children}
    </Link>
  );
}
