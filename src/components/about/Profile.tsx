import styles from '@/styles/components/about/Profile.module.scss';
import React from 'react';
import Link from 'next/link';

export default function Profile() {
  return (
    <ul className={styles.profile_list}>
      <li className={styles.profile_item}>
        <h4>CONTACT</h4>
        <dl>
          <dt>전화번호</dt>
          <dd>010. 4181. 9489</dd>
          <dt>이메일</dt>
          <dd>sryung1225@gmail.com</dd>
        </dl>
      </li>
      <li className={styles.profile_item}>
        <h4>SNS</h4>
        <dl>
          <dt>깃허브</dt>
          <dd>
            <Link href="https://github.com/sryung1225">github/sryung1225</Link>
          </dd>
          <dt>블로그</dt>
          <dd>
            <Link href="https://s-ryung.tistory.com">s-ryung.tistory</Link>
          </dd>
        </dl>
      </li>
      <li className={styles.profile_item}>
        <h4>PERSONALITY</h4>
        <dl>
          <dt>MBTI</dt>
          <dd>실용적인 조력가 (ISFJ)</dd>
          <dt>취미</dt>
          <dd>수영 / 게임 / 여행</dd>
        </dl>
      </li>
    </ul>
  );
}
