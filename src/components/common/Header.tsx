'use client';

import Image from 'next/image';
import useScrolledPast from '@/hooks/useScrolledPast';
import styles from '@/styles/common/Header.module.scss';

export default function Header() {
  const isScrolledPast = useScrolledPast('about', 0);
  return (
    <header
      className={isScrolledPast ? styles.header_white : styles.header_black}
    >
      <Image
        className={styles.logo}
        src={isScrolledPast ? '/img/logo_black.svg' : '/img/logo_white.svg'}
        alt="로고"
        width="40"
        height="40"
        priority
      />
      <span className={styles.name}>RYUNGFOLIO</span>
    </header>
  );
}
