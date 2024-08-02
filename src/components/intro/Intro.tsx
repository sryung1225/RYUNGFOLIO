'use client';

import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/components/intro/Intro.module.scss';
import { useEffect } from 'react';
import Title from './Title';

export default function Intro() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      console.log('5초 멈춰!');
      document.body.style.overflow = 'unset';
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className={styles.wrapper}>
      <div className={styles.snow} />
      <div className={styles.title_wrapper}>
        <Title />
        <div className={styles.bar} />
        <div className={styles.mouse} />
      </div>
      <div className={styles.wave_wrapper}>
        {Array(3)
          .fill(null)
          .map(() => (
            <div key={uuidv4()} className={styles.wave} />
          ))}
      </div>
    </section>
  );
}
