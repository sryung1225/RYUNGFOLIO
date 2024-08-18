import { ReactNode } from 'react';
import styles from '@/styles/common/Section.module.scss';

interface HeadlinePropsType {
  headline: ReactNode;
  subheadline?: ReactNode;
}

function Headline({ headline, subheadline = null }: HeadlinePropsType) {
  return (
    <>
      <h3 className={styles.headline}>{headline}</h3>
      {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
    </>
  );
}

export default Headline;
