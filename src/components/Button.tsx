import styles from '@/styles/components/Button.module.scss';

export default function Button() {
  return (
    <div className={styles.wrap}>
      <button className={styles.button}>클릭!</button>
    </div>
  );
}
