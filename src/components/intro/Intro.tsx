import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/intro/Intro.module.scss';
import Title from './Title';

export default function Intro() {
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
