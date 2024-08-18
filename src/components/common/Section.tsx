import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/common/Section.module.scss';
import Headline from './Headline';

interface SectionPropsType {
  id: string;
  name: string;
  headline: ReactNode;
  subheadline?: ReactNode;
  children: ReactNode;
}

function Section({
  id,
  name,
  headline,
  subheadline,
  children,
}: SectionPropsType) {
  return (
    <section id={id}>
      <h2 className="a11yHidden">{name}</h2>
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
