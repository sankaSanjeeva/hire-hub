'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { LogoIcon } from '../../../public/icons';
import CenteredContainer from '../centered-container';
import { useElementIsVisible } from '@/hook';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export default function Header() {
  const pathname = usePathname();

  const { ref, visible } = useElementIsVisible({ initialVisible: true });

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <div ref={ref} className="absolute left-0 top-0 h-20" />

      <header
        className={cn(
          'supports-backdrop-blur:bg-slate/60 fixed top-0 w-full flex-none py-5 text-white backdrop-blur transition-all duration-500',
          !visible && 'bg-black/70 py-2'
        )}
      >
        <CenteredContainer className="flex items-center justify-between">
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
    </>
  );
}
