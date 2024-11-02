import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { Header } from '@/components';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'] });

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
      </body>
    </html>
  );
}
