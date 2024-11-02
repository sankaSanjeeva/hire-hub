import React from 'react';
import { ReactComponent as LogoIcon } from '../../../public/icons/logo.svg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Footer() {
  return (
    <footer className="bg-black px-16 pb-16 pt-24 text-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto_300px] lg:gap-16 xl:gap-28">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <div className="inline-flex items-center gap-2">
              <LogoIcon />
              <h3 className="text-xl font-semibold">Hire Hub</h3>
            </div>
            <p className="text-center leading-8 lg:text-start">
              Quis enim pellentesque viverra tellus eget malesuada facilisis.
              Congue nibh vivamus aliquet nunc mauris dui nullam et.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-start">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="flex flex-col items-center leading-8 lg:items-start">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Partners</li>
              <li>For Candidates</li>
              <li>For Employers</li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-start">
            <h3 className="text-xl font-semibold">Job Categories</h3>
            <ul className="flex flex-col items-center leading-8 lg:items-start">
              <li>Telecommunications</li>
              <li>Hotels & Tourism</li>
              <li>Construction</li>
              <li>Education</li>
              <li>Financial Services</li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-start">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <form className="space-y-4">
              <p className="pt-2 text-center text-sm text-white/80 lg:text-start">
                Eu nunc pretium vitae platea. Non netus elementum vulputate
              </p>
              <Input
                type="email"
                placeholder="Email Address"
                className="h-[50px] rounded-xl border border-white/50 bg-transparent ring-offset-black"
              />
              <Button className="h-[50px] w-full rounded-xl font-bold">
                Subscribe now
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
          <span className="text-white/50">
            © Copyright Hire Hub {new Date().getFullYear()}.
          </span>
          <div className="inline-flex gap-5">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
