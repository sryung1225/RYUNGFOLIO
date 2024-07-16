import styles from '@/styles/components/about/About.module.scss';
import Image from 'next/image';
import infos from '@/constants/infos';
import React from 'react';
import Section from '../common/Section';
import Headline from '../common/Headline';

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
      <div className={styles.gallery}>
        <Image
          src="/img/profile_1.jpg"
          alt="프로필 이미지"
          width="260"
          height="260"
        />
        <Image
          src="/img/profile_2.jpg"
          alt="프로필 이미지"
          width="260"
          height="260"
        />
      </div>
      <dl className={styles.info_wrapper}>
        {infos.map((info) => (
          <React.Fragment key={info.key}>
            <dt className={styles.info_icon}>
              <i className={styles[info.key]} />
              <span className="a11yHidden">{info.label}</span>
            </dt>
            <dd className={styles.info_description}>{info.description}</dd>
          </React.Fragment>
        ))}
      </dl>
      <Headline
        headline={
          <>
            그리고 <span className="point_green">개발자</span> 이성령을
            소개합니다.
          </>
        }
        subheadline={
          <>
            더 좋은 방식이 있지 않을까에 대한 끊임 없는 고민을 합니다.
            <br />
            그리고 내가 안 바를 모두에게 쉬운 말로 공유하는 것을 좋아합니다.
          </>
        }
      />
      <div className={styles.gallery}>
        <Image
          src="/img/profile_3.png"
          alt="프로필 미모티콘"
          width="300"
          height="310"
        />
        <div className={styles.bubble_left}>깃헙</div>
        <div className={styles.bubble_right}>블로그</div>
      </div>
    </Section>
  );
}
