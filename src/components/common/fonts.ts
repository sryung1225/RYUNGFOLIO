import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const aggro = localFont({
  src: [
    {
      path: '../../fonts/SB-Aggro-M.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/SB-Aggro-L.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/SB-Aggro-B.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aggro',
});
