import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/common/Section.module.scss';

interface SectionProps {
  id: string;
  headlineText: ReactNode;
  subheadlineText: string;
  children: ReactNode;
}

function Section({
  id,
  headlineText,
  subheadlineText,
  children,
}: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <h2 className="a11yHidden">프로필</h2>
      <Link href={`#${id}`} className={styles.hashtag}>
        # {id.toUpperCase()}
      </Link>
      <h3 className={styles.headline}>{headlineText}</h3>
      <h4 className={styles.subheadline}>{subheadlineText}</h4>
      {children}
    </section>
  );
}

export default Section;
