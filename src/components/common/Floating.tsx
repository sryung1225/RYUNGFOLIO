'use client';

import Link from 'next/link';
import useScrolledPast from '@/hooks/useScrolledPast';
import styles from '@/styles/common/Floating.module.scss';
import LINKS from '@/constants/links';

export default function Floating() {
  const isScrolledPast = useScrolledPast('about', window.innerHeight - 200);
  return (
    isScrolledPast && (
      <div className={styles.floating}>
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
    )
  );
}
