'use client';

import { useActionState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { login } from '@/data/actions/auth';
import { useAuth } from '@/providers/auth';
import SubmitButton from '../submit-button';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { setUser } = useAuth();

  const [state, action] = useActionState(login, undefined);

  useEffect(() => {
    if (state?.user) {
      setUser(state.user);
      router.push(decodeURIComponent(searchParams.get('redirect') ?? ''));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.user]);

  return (
    <form action={action} className="relative flex flex-col gap-6">
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

      <div className="relative space-y-1">
        <Link className="text-sm underline" href="/forget-password">
          Forgot your password?
        </Link>

        <Input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={state?.data?.password}
        />
        {state?.errors?.password && (
          <p className="absolute -bottom-5 mx-1 text-sm text-red-500">
            {state.errors.password}
          </p>
        )}
      </div>

      <SubmitButton />

      {state?.message && (
        <p className="absolute -bottom-6 mx-1 text-sm text-red-500">
          {state.message}
        </p>
      )}
    </form>
  );
}
