'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/styles/common/Floating.module.scss';
import LINKS from '@/constants/links';

export default function Floating() {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) setIsScrolledPast(true);
      else setIsScrolledPast(false);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isScrolledPast && (
      <>
        <div className={styles.floating_left}>
          {LINKS.map((link) => (
            <Link
              key={link.kor}
              href={link.href}
              target="_blank"
              className={`${styles.link} ${styles[link.name]}`}
            >
              <span className="a11yHidden">{link.kor} 바로가기</span>
            </Link>
          ))}
        </div>
        <div className={styles.floating_right}>
          <button
            className={styles.scrollTop}
            type="button"
            onClick={handleScrollToTop}
          >
            <span className="a11yHidden">페이지 최상단으로 올라가기</span>
          </button>
        </div>
      </>
    )
  );
}
