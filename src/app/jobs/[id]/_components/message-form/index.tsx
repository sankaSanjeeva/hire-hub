import Form from 'next/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MailIcon, MessageIcon, PhoneIcon } from './icons';
import { UserIcon } from '../../../../../../public/icons';

export default function MessageForm() {
  return (
    <Form action="" className="space-y-6 rounded-3xl bg-theme/10 px-5 py-10">
      <h3>Send Us Message</h3>

      <div className="relative">
        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <Input className="rounded-xl pl-11" placeholder="Full Name" />
      </div>

      <div className="relative">
        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <Input
          className="rounded-xl pl-11"
          placeholder="Email Address"
          type="email"
        />
      </div>

      <div className="relative">
        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <Input
          className="rounded-xl pl-11"
          placeholder="Phone Number"
          type="tel"
        />
      </div>

      <div className="relative">
        <MessageIcon className="absolute left-3 top-2 text-gray-500" />
        <Textarea
          className="rounded-xl pl-11"
          placeholder="Your Message"
          rows={5}
        />
      </div>

      <Button type="submit">Send Message</Button>
    </Form>
  );
}
