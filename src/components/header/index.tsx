'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { LogoIcon } from '../../../public/icons';
import CenteredContainer from '../centered-container';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export default function Header() {
  const pathname = usePathname();

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 w-full text-white">
      <CenteredContainer className="flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <LogoIcon />
          <span>Hire Hub</span>
        </div>
        <nav>
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
        <div className="flex gap-1">
          <Button variant="ghost">Login</Button>
          <Button>Register</Button>
        </div>
      </CenteredContainer>
    </header>
  );
}
