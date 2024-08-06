import { ReactNode } from 'react';
import styles from '@/styles/common/Section.module.scss';

interface HeadlinePropsType {
  headline: ReactNode;
  subheadline?: ReactNode;
}

function Headline({ headline, subheadline }: HeadlinePropsType) {
  return (
    <>
      <h3 className={styles.headline}>{headline}</h3>
      {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
    </>
  );
}

Headline.defaultProps = {
  subheadline: null,
};

export default Headline;
