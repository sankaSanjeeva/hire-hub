import { Suspense } from 'react';
import Image from 'next/image';
import { LoginForm } from './_components';
import { RedirectLink } from '../_components';

export default function Login() {
  return (
    <div className="flex items-center gap-5">
      <div className="hidden lg:block">
        <Image
          src="/images/login.png"
          alt="About Us"
          width={520}
          height={520}
          className="aspect-square object-cover"
          //   placeholder="blur"
          //   blurDataURL=""
        />
      </div>

      <div className="w-full max-w-80">
        <div className="text-center">
          <h1>Sign In</h1>
          <p className="mt-2 text-gray-500">
            Enter your email below to login to your account
          </p>
        </div>

        <div className="mt-8">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>

        <div className="mt-8 text-center text-sm">
          Don&apos;t have an account?{' '}
          <span className="text-theme">
            <Suspense>
              <RedirectLink path="/sign-up">Sign up</RedirectLink>
            </Suspense>
          </span>
        </div>
      </div>
    </div>
  );
}
