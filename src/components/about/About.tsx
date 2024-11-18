import styles from '@/styles/about/About.module.scss';
import Image from 'next/image';
import React from 'react';
import Section from '../common/Section';
import Profile from './Profile';

export default function About() {
  return (
    <Section
      id="about"
      name="프로필 소개"
      headline={
        <>
          매일 하루를 크리스마스처럼
          <br />
          기분 좋은 경험을 제공하는 서비스를 만들고픈 <br />
          개발자 <span className="point_green">이성령</span>입니다. <br />
        </>
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          <Image
            src="/img/profile.jpg"
            alt="프로필 이미지"
            className={styles.gallery}
            width="260"
            height="260"
          />
          <div className={styles.name}>
            <p className={styles.eng}>LEE SUNG RYUNG</p>
            <h4 className={styles.kor}>이 성 령</h4>
            <p className={styles.birth}>1996. 12. 25</p>
          </div>
        </div>
        <Profile />
      </div>
    </Section>
  );
}
