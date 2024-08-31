'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@/styles/common/Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const pathname = usePathname();
  const showGoBackLink = pathname.startsWith('/projects');
  useEffect(() => {
    if (showGoBackLink) {
      setIsScrolledPast(true);
    }
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect().top;
        if (position <= 0) setIsScrolledPast(true);
        else setIsScrolledPast(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showGoBackLink]);

  return (
    <header
      className={isScrolledPast ? styles.header_white : styles.header_black}
    >
      {showGoBackLink ? (
        <Link className={styles.link_button_prev} href="/#projects">
          전체 프로젝트 보기
        </Link>
      ) : (
        <Image
          className={styles.logo}
          src={isScrolledPast ? '/img/logo_black.svg' : '/img/logo_white.svg'}
          alt="로고"
          width="40"
          height="40"
          priority
        />
      )}
      <h1 className={styles.name}>RYUNGFOLIO</h1>
    </header>
  );
}
