import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { pretendard, aggro } from '@/components/common/fonts';
import Floating from '@/components/common/Floating';
import Footer from '@/components/common/Footer';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: '이성령 | 프론트엔드 개발자',
  description: '웹 프론트엔드 개발자 이성령의 포트폴리오 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <meta property="og:image" content="/img/thumbnail.jpg" />
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId="process.env.NEXT_PUBLIC_GA_ID" />
      )}
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
