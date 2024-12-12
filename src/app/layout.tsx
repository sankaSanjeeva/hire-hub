import type { Metadata } from 'next';
import Link from 'next/link';
import { Figtree } from 'next/font/google';
import { Footer, Header } from '@/components';
import './globals.css';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Hire Hub',
  description: 'Find Your Dream Job Today',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />

        <main>{children}</main>

        <div className="fixed bottom-5 right-5 rounded-lg bg-white px-5 py-2 shadow-md">
          <HoverCard>
            <HoverCardTrigger className="text-theme">
              Create Job
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm text-gray-500">
                  This is a temporally link for creating a job. It will be
                  removed once the job creation is implemented.
                </p>
                <Link
                  href="/new"
                  className="text-theme underline-offset-4 hover:underline"
                >
                  Create
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <Footer />
      </body>
    </html>
  );
}
