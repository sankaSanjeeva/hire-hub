'use client';

import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { signUp } from '@/data/actions/auth';
import SubmitButton from '../submit-button';

export default function SignUpForm() {
  const searchParams = useSearchParams();

  const signUpAndRedirect = signUp.bind(
    null,
    searchParams.get('redirect') ?? ''
  );

  const [state, action] = useActionState(signUpAndRedirect, undefined);

  return (
    <form action={action} className="relative flex flex-col gap-6">
      <div className="relative">
        <Input
          name="firstName"
          placeholder="First Name"
          defaultValue={state?.data?.firstName}
        />
        {state?.errors?.firstName && (
          <p className="absolute -bottom-5 mx-1 text-sm text-red-500">
            {state.errors.firstName}
          </p>
        )}
      </div>

      <div className="relative">
        <Input
          name="lastName"
          placeholder="Last Name"
          defaultValue={state?.data?.lastName}
        />
        {state?.errors?.lastName && (
          <p className="absolute -bottom-5 mx-1 text-sm text-red-500">
            {state.errors.lastName}
          </p>
        )}
      </div>

      <div className="relative">
        <Input
          name="email"
          placeholder="Email"
          type="email"
          defaultValue={state?.data?.email}
        />
        {state?.errors?.email && (
          <p className="absolute -bottom-5 mx-1 text-sm text-red-500">
            {state.errors.email}
          </p>
        )}
      </div>

      <div className="relative">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={state?.data?.password}
        />
        {state?.errors?.password && (
          <p
            className="absolute -bottom-5 mx-1 line-clamp-1 text-sm text-red-500"
            title={state.errors.password.join(', ')}
          >
            {state.errors.password.join(' ')}
          </p>
        )}
      </div>

      <div className="relative">
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          defaultValue={state?.data?.confirmPassword}
        />
        {state?.errors?.confirmPassword && (
          <p
            className="absolute -bottom-5 mx-1 line-clamp-1 text-sm text-red-500"
            title={state.errors.confirmPassword.join(', ')}
          >
            {state.errors.confirmPassword}
          </p>
        )}
      </div>

      <SubmitButton />

      {state?.message && (
        <p className="absolute -bottom-6 text-sm text-red-500">
          {state.message}
        </p>
      )}
    </form>
  );
}
