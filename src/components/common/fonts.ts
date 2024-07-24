import localFont from 'next/font/local';

// eslint-disable-next-line import/prefer-default-export
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
