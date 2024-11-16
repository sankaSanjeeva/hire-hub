'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { HamburgerIcon, LogoIcon } from '../../../public/icons';
import CenteredContainer from '../centered-container';
import { useElementIsVisible } from '@/hook';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { AuthButtons, NavItems } from './components';

export default function Header() {
  const { ref, visible } = useElementIsVisible({ initialVisible: true });

  return (
    <>
      <div ref={ref} className="absolute left-0 top-0 h-20" />

      <header
        className={cn(
          'supports-backdrop-blur:bg-slate/60 fixed top-0 z-10 w-screen flex-none py-5 text-white backdrop-blur transition-all duration-500',
          !visible && 'bg-black/70 py-2'
        )}
      >
        <CenteredContainer className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <LogoIcon />
            <span>Hire Hub</span>
          </div>

          <NavItems className="hidden lg:flex" />

          <AuthButtons className="hidden lg:flex" />

          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger>
                <HamburgerIcon />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col border-none bg-black/70 backdrop-blur"
              >
                <SheetHeader>
                  <SheetTitle />
                </SheetHeader>

                <NavItems className="flex flex-grow lg:hidden [&>ul]:flex-col" />

                <AuthButtons className="flex justify-center lg:hidden" />
              </SheetContent>
            </Sheet>
          </div>
        </CenteredContainer>
      </header>
    </>
  );
}
