'use client';

import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/components/intro/Intro.module.scss';
import Title from './Title';

export default function Intro() {
  return (
    <>
      <section className={styles.wrapper}>
        <Title />
        <div className={styles.bar} />
        <div className={styles.mouse} />
      </section>
      <div className={styles.wave_wrapper}>
        {Array(3)
          .fill(null)
          .map(() => (
            <div key={uuidv4()} className={styles.wave} />
          ))}
      </div>
    </>
  );
}
