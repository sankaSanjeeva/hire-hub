import Image from 'next/image';
import Link from 'next/link';
import { SignUpForm } from './_components';
import { RedirectLink } from '../_components';

export default function SignUp() {
  return (
    <div className="flex items-center gap-5">
      <div className="hidden lg:block">
        <Image
          src="/images/sign-up.png"
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
          <h1>Create an account</h1>
          <p className="mt-2 text-gray-500">
            Enter your information to get started
          </p>
        </div>

        <div className="mt-8">
          <SignUpForm />
        </div>

        <div className="mt-4 text-center text-sm">
          <p>
            Already have an account?{' '}
            <span className="text-theme">
              <RedirectLink path="/login">Login</RedirectLink>
            </span>
          </p>
          <p>
            Create a company account?{' '}
            <span className="text-theme">
              <Link className="underline" href="/company-sign-up">
                Create
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
