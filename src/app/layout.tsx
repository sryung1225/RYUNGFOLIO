import type { Metadata } from 'next';
import { pretendard, aggro } from '@/components/common/fonts';
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
      <body className={`${pretendard.variable} ${aggro.variable}`}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
