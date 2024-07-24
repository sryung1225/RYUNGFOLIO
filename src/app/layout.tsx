import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.scss';

const aggro = localFont({
  src: [
    {
      path: './fonts/SB-Aggro-M.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SB-Aggro-L.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SB-Aggro-B.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aggro',
});

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
      <body className={aggro.className}>{children}</body>
    </html>
  );
}
