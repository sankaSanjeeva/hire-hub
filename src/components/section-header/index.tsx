import { cn } from '@/lib/utils';

type Props = {
  main: string;
  sub: string;
  className?: string;
};

export default function SectionHeader({ main, sub, className }: Props) {
  return (
    <div className={cn('space-y-10', className)}>
      <h1 className="text-5xl leading-none">{main}</h1>
      <p className="leading-none text-opacity-80">{sub}</p>
    </div>
  );
}
