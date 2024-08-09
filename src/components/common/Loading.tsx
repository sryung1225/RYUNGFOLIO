import { SyncLoader } from 'react-spinners';
import styles from '@/styles/components/common/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.dimmed}>
      <SyncLoader color="#c5554d" margin={6} />
    </div>
  );
}
