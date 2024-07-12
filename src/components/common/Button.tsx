import styles from '@/styles/components/common/Button.module.scss';

export default function Button() {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.button}>
        클릭!
      </button>
    </div>
  );
}
