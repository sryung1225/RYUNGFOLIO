'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@/styles/common/Header.module.scss';

export default function Header() {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        const aboutPosition = aboutElement.getBoundingClientRect().top;
        if (aboutPosition <= 0) setIsScrolledPast(true);
        else setIsScrolledPast(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
