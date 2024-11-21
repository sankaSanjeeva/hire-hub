import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { Footer, Header } from '@/components';
import './globals.css';

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

        <Footer />
      </body>
    </html>
  );
}
