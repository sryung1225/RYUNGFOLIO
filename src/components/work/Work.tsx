import React from 'react';
import styles from '@/styles/components/work/Work.module.scss';
import Section from '../common/Section';
import Headline from '../common/Headline';

export default function Work() {
  return (
    <Section
      id="work"
      name="업무 경험"
      headline={
        <>
          실제 서비스의 화면을 그려보고 싶다는 갈망으로 <br />
          마크업 개발자로의 커리어 첫 걸음을 내딛게 됐습니다. <br />
        </>
      }
      subheadline={
        <>
          웹 구조 설계와 디자인 숙련도를 쌓고 웹 접근성에 대해 깊게 알아가는
          기회가 됐습니다.
          <br />
          그리고 다양한 직무와의 협업을 통해 개발 생태계를 몸소 느낄 수
          있었습니다.
        </>
      }
    >
      <div className={styles.wrapper}>
        <p>티몬</p>
      </div>
      <Headline
        headline={
          <>
            그리고 이제는 화면 그리기를 넘어 사용자와의 상호작용을 할 수 있는
            <br />
            프론트엔드 개발자로의 영역 확장에 도전하고 있습니다. <br />
          </>
        }
        subheadline={
          <>
            스크립트를 활용하여 사용자의 행동에 따라 적절한 접근성을 직접
            부여하고 <br />
            원하는 상호작용을 구현 할 수 있다는 부분에서 재미를 느끼게 됐습니다.
          </>
        }
      />
      <div className={styles.wrapper}>
        <p>멋사</p>
      </div>
    </Section>
  );
}
