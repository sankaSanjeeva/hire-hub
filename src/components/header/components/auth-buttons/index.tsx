import { useActionState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { logout } from '@/data/actions/auth';

export default function AuthButtons({
  isAuth,
  className,
}: {
  isAuth: boolean;
  className?: string;
}) {
  const [loggedIn, action] = useActionState(logout, isAuth);

  return (
    <div className={cn('gap-1', className)}>
      {loggedIn ? (
        <form action={action}>
          <Button className="w-24 text-white">Log out</Button>
        </form>
      ) : (
        <>
          <Link href="/login">
            <Button variant="ghost" className="w-24 text-white">
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="w-24">Register</Button>
          </Link>
        </>
      )}
    </div>
  );
}
