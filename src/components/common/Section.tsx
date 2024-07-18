import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/common/Section.module.scss';
import Headline from './Headline';

interface SectionPropsType {
  id: string;
  headline: ReactNode;
  subheadline?: ReactNode;
  children: ReactNode;
}

function Section({ id, headline, subheadline, children }: SectionPropsType) {
  return (
    <section id={id} className={styles.section}>
      <h2 className="a11yHidden">프로필</h2>
      <Link href={`#${id}`} className={styles.hashtag}>
        # {id.toUpperCase()}
      </Link>
      <Headline headline={headline} subheadline={subheadline} />
      {children}
    </section>
  );
}

Section.defaultProps = {
  subheadline: null,
};

export default Section;
