import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Layout/Header';
import { Noto_Sans_JP } from 'next/font/google';
import { Footer } from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'マインドフルエンジニア',
  description: 'エンジニアとしての生活をもっと楽しく',
};

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${notoSansJp.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
