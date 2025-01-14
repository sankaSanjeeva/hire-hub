'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? 'Login...' : 'Login'}
    </Button>
  );
}
