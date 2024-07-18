import { ProfileType } from '@/types/profile';

const PROFILE: ProfileType[] = [
  {
    title: 'CONTACT',
    details: [
      {
        term: '전화번호',
        description: '010. 4181. 9489',
        type: 'link',
        href: 'mailto:sryung1225@gmail.com',
      },
      {
        term: '이메일',
        description: 'sryung1225@gmail.com',
        type: 'link',
        href: 'tel:010-4181-9489',
      },
    ],
  },
  {
    title: 'SNS',
    details: [
      {
        term: '깃허브',
        description: 'github/sryung1225',
        type: 'link',
        href: 'https://github.com/sryung1225',
      },
      {
        term: '블로그',
        description: 's-ryung.tistory',
        type: 'link',
        href: 'https://s-ryung.tistory.com',
      },
    ],
  },
  {
    title: 'PERSONALITY',
    details: [
      { term: 'MBTI', description: '실용적인 조력가 (ISFJ)' },
      { term: '취미', description: '수영 / 게임 / 여행' },
    ],
  },
];

export default PROFILE;
