import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import PROFILE_DATA from '@/constants/profile';
import styles from '@/styles/components/about/Profile.module.scss';

export default function Profile() {
  return (
    <ul className={styles.list}>
      {PROFILE_DATA.map((Item) => (
        <li key={Item.title}>
          <h5 className={styles.title}>{Item.title}</h5>
          <dl className={styles.detail}>
            {Item.details.map((detail) => (
              <React.Fragment key={uuidv4()}>
                <dt>{detail.term}</dt>
                <dd>
                  {detail.type === 'link' && detail.href ? (
                    <Link href={detail.href}>{detail.description}</Link>
                  ) : (
                    detail.description
                  )}
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  );
}
