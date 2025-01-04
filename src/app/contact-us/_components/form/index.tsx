'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Form() {
  const action = (formData: FormData) => {
    const data = Object.fromEntries(formData) as { message: string };
    const link = `mailto:hirehub@info.com?subject=${encodeURIComponent('To ask something')}&body=${encodeURIComponent(data.message)}`;
    window.location.href = link;
  };

  return (
    <form
      action={action}
      className="h-fit w-full space-y-10 rounded-3xl bg-theme/10 px-10 py-16 lg:w-2/5"
    >
      <div className="text-center">
        <h3 className="text-[28px] font-bold">Contact Info</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="firstName" className="font-semibold">
            First Name
          </label>
          <Input name="firstName" id="firstName" placeholder="ex: John" />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastName" className="font-semibold">
            Last Name
          </label>
          <Input name="lastName" id="lastName" placeholder="ex: Smith" />
        </div>
        <div className="col-span-2 space-y-1">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="ex: john@mail.com"
          />
        </div>
        <div className="col-span-2 space-y-1">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <Textarea
            name="message"
            id="message"
            placeholder="Your message"
            rows={6}
          />
        </div>
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}
