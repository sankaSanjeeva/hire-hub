import { Suspense } from 'react';
import { CenteredContainer } from '@/components';
import { Details, Form, FormSkeleton } from './_components';

export default function ContactUs() {
  return (
    <div>
      <section className="flex h-80 items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white">Contact Us</h1>
      </section>

      <CenteredContainer className="py-16">
        <section className="flex flex-col gap-14 lg:flex-row">
          <Details />
          <Suspense fallback={<FormSkeleton />}>
            <Form />
          </Suspense>
        </section>
        <section className="mt-28 overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22404.459324692474!2d79.84016328221847!3d6.939947057545058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259004f59931f%3A0x96296bdbedf831eb!2sPort%20city%20colombo!5e0!3m2!1sen!2slk!4v1735977421493!5m2!1sen!2slk"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </CenteredContainer>
    </div>
  );
}
