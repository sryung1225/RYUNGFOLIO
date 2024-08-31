import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { pretendard, aggro } from '@/components/common/fonts';
import Floating from '@/components/common/Floating';
import Footer from '@/components/common/Footer';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'RYUNGFOLIO | 이성령 포트폴리오',
  description: '프론트엔드 개발자 이성령의 포트폴리오 입니다.',
  openGraph: {
    title: 'RYUNGFOLIO | 이성령 포트폴리오',
    description: '프론트엔드 개발자 이성령의 포트폴리오 입니다.',
    url: 'https://ryungfolio.vercel.app',
    siteName: 'RYUNGFOLIO',
    type: 'website',
    locale: 'ko_KR',
    images: 'https://ryungfolio.vercel.app/img/thumbnail.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GAID: string = process.env.NEXT_PUBLIC_GA_ID || '';
  return (
    <html lang="ko">
      <GoogleAnalytics gaId={GAID} />
      <body className={`${pretendard.variable} ${aggro.variable}`}>
        <main>
          {children}
          <Floating />
          <Footer />
        </main>
      </body>
    </html>
  );
}
