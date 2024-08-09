import styles from '@/styles/components/contact/Alert.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Alert({ message }: { message: string }) {
  const messages: string[] = message.split('\n');
  return (
    <div className={styles.alert}>
      {messages.map((text) => (
        <p className={styles.message} key={uuidv4()}>
          {text}
        </p>
      ))}
    </div>
  );
}
