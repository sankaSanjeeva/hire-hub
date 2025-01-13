import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { readSession } from '@/lib/auth';

export default async function AuthButtons({
  className,
}: {
  className?: string;
}) {
  const session = await readSession();

  return (
    <div className={cn('gap-1', className)}>
      {!!session?.userId ? (
        <Link href="/logout">
          <Button className="w-24 text-white">Log out</Button>
        </Link>
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
