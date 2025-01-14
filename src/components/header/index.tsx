'use client';

import { Children, cloneElement, ReactElement } from 'react';
import { usePathname } from 'next/navigation';
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
import { NavItems } from './components';

export default function Header({ children }: { children: ReactElement }) {
  const pathname = usePathname();

  const { ref, visible } = useElementIsVisible({ initialVisible: true });

  return (
    <>
      <div ref={ref} className="absolute left-0 top-0 h-20" />

      <header
        className={cn(
          'supports-backdrop-blur:bg-slate/60 fixed top-0 z-50 w-screen flex-none py-5 text-white backdrop-blur transition-all duration-500',
          pathname !== '/' && 'bg-black',
          !visible && 'bg-black/70 py-2'
        )}
      >
        <CenteredContainer className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <LogoIcon />
            <span>Hire Hub</span>
          </div>

          <NavItems className="hidden lg:flex" />

          {Children.map(children, (child) =>
            cloneElement(child, {
              className: 'hidden lg:flex',
            })
          )}

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

                {Children.map(children, (child) =>
                  cloneElement(child, {
                    className: 'flex justify-center lg:hidden',
                  })
                )}
              </SheetContent>
            </Sheet>
          </div>
        </CenteredContainer>
      </header>
    </>
  );
}
