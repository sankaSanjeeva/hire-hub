import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AuthButtons({ className }: { className?: string }) {
  return (
    <div className={cn('gap-1', className)}>
      <Button variant="ghost" className="w-24 text-white">
        Login
      </Button>
      <Button className="w-24">Register</Button>
    </div>
  );
}
