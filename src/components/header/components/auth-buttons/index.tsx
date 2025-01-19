import { useActionState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { logout } from '@/data/actions/auth';
import { useAuth } from '@/providers/auth';

export default function AuthButtons({ className }: { className?: string }) {
  const { isAuth } = useAuth();

  const [, action] = useActionState(logout, undefined);

  return (
    <div className={cn('gap-1', className)}>
      {isAuth ? (
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
