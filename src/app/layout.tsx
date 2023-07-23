import * as React from 'react';
import { Roboto } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppLayout from '@/components/organisms/AppLayout';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={roboto.variable}>
      <body className={roboto.className}>
        <ThemeRegistry>
          <AppLayout>{children}</AppLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
