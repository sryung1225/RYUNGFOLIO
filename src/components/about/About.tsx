import styles from '@/styles/components/about/About.module.scss';
import Image from 'next/image';
import React from 'react';
import Section from '../common/Section';
import Profile from './Profile';

export default function About() {
  return (
    <Section
      id="about"
      headline={
        <>
          저는 <span className="point_red">크리스마스</span>를 좋아하는
          이성령이라고 합니다
        </>
      }
      subheadline="매일 하루 하루가 크리스마스처럼 의미 있고 즐거웠으면 좋겠습니다"
    >
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          <Image
            src="/img/profile_1.jpg"
            alt="프로필 이미지"
            className={styles.gallery}
            width="260"
            height="260"
          />
          <div className={styles.name}>
            <p className={styles.eng}>LEE SUNG RYUNG</p>
            <h5 className={styles.kor}>이 성 령</h5>
            <p className={styles.birth}>1996. 12. 25</p>
          </div>
        </div>
        <Profile />
      </div>
    </Section>
  );
}
