import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col gap-10 lg:flex-row">
        <h1 className="flex-1 text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
          ipsum quod corporis provident aut pariatur vitae fugiat necessitatibus
          accusamus. Aperiam inventore dignissimos aspernatur labore est, rem
          sapiente autem assumenda!
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <Image
          src="/images/about-us.png"
          alt="About Us"
          width={0}
          height={0}
          sizes="100vw"
          className="auto aspect-[8/5] w-full object-cover lg:w-4/5"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,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"
        />
      </div>
    </section>
  );
}
