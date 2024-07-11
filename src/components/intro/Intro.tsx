'use client';

import styles from '@/styles/components/intro/Intro.module.scss';
import Title from './Title';

export default function Intro() {
  return (
    <section className={styles.wrapper}>
      <Title />
    </section>
  );
}
