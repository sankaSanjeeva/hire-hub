import Image from 'next/image';
import { CenteredContainer, SectionHeader } from '@/components';
import { QuotesIcon, StartIcon } from '../../../../public/icons';

const reviews = [
  {
    id: 1,
    title: 'Amazing services',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam blanditiis. Omnis quae eius deleniti repellat optio quod deserunt provident sint quo sequi, inventore, vitae, necessitatibus fugit assumenda rerum illum.',
    user: { name: 'Marco Kihn', photo: 'https://i.pravatar.cc/150?img=59' },
  },
  {
    id: 2,
    title: 'Everything simple ',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam blanditiis.',
    user: { name: 'Kristin Hester', photo: 'https://i.pravatar.cc/150?img=58' },
  },
  {
    id: 3,
    title: 'Awesome, thank you!',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam blanditiis. Omnis quae eius deleniti repellat optio quod deserunt provident sint quo sequi, inventore, vitae, necessitatibus fugit assumenda rerum illum.',
    user: { name: 'Zion Cisneros', photo: 'https://i.pravatar.cc/150?img=32' },
  },
];

export default function Reviews() {
  return (
    <section className="bg-theme/10">
      <CenteredContainer className="py-14">
        <SectionHeader
          main="Testimonials from Our Customers"
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          className="text-center"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {reviews.map((review) => (
            <div
              className="flex max-w-96 flex-col rounded-[20px] bg-white p-10"
              key={review.id}
            >
              <div className="flex flex-grow flex-col gap-5">
                <div className="inline-flex gap-2">
                  {[1, 2, 3, 4, 5].map((x) => (
                    <StartIcon key={x} />
                  ))}
                </div>
                <h2 className="text-2xl font-semibold">{review.title}</h2>
                <p className="line-clamp-4 italic">{review.message}</p>
              </div>

              <div className="relative">
                <div className="absolute right-0 top-10">
                  <QuotesIcon />
                </div>
                <div className="mt-16 grid grid-cols-[auto_1fr] gap-x-4">
                  <div className="row-span-2">
                    <Image
                      src={review.user.photo}
                      width={64}
                      height={64}
                      alt="avatar-1"
                      className="rounded-full"
                    />
                  </div>
                  <span className="my-auto font-semibold">
                    {review.user.name}
                  </span>
                  <span className="my-auto text-black/60">Happy Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
