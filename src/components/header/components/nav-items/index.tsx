'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export default function NavItems({ className }: { className?: string }) {
  const pathname = usePathname();

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
  return (
    <>
      <nav className={className}>
        <ul className="flex gap-5">
          {navLinks.map(({ label, path }) => (
            <li
              key={path}
              className={cn(
                'px-3 py-2 text-white/50 hover:text-white/80',
                isActiveLink(path) && 'text-white'
              )}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
