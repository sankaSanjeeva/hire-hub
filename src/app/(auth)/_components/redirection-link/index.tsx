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

  const redirect = encodeURIComponent(searchParams.get('redirect') ?? '');

  return (
    <Link className="underline" href={`${path}?redirect=${redirect}`}>
      {children}
    </Link>
  );
}
