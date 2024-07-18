import { ReactNode } from 'react';
import styles from '@/styles/components/common/Section.module.scss';

interface HeadlinePropsType {
  headline: ReactNode;
  subheadline?: ReactNode;
}

function Headline({ headline, subheadline }: HeadlinePropsType) {
  return (
    <>
      <h3 className={styles.headline}>{headline}</h3>
      {subheadline && <h4 className={styles.subheadline}>{subheadline}</h4>}
    </>
  );
}

Headline.defaultProps = {
  subheadline: null,
};

export default Headline;
