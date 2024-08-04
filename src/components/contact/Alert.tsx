import styles from '@/styles/components/contact/Alert.module.scss';

export default function Alert({ message }: { message: string }) {
  return <p className={styles.alert}>{message}</p>;
}
