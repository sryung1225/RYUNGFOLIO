import { v4 as uuidv4 } from 'uuid';
import TIMELINE from '@/constants/timeline';
import styles from '@/styles/components/education/Timeline.module.scss';

export default function Timeline() {
  return (
    <ul className={styles.list}>
      {TIMELINE.map((item) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.year}>{item.year}</span>
          <div className={styles.description}>
            <p>{item.date}</p>
            <p>{item.title}</p>
            {item.contexts &&
              item.contexts.map((context) => <p key={uuidv4()}>{context}</p>)}
          </div>
        </li>
      ))}
    </ul>
  );
}
