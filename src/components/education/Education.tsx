import React from 'react';
import Section from '../common/Section';
import Timeline from './Timeline';

export default function Education() {
  return (
    <Section
      id="education"
      name="학력, 대외 활동 경험 및 자격증"
      headline={
        <>
          천천히 그리고 자세히 웹에 대해 알아가며 <br />
          사용자에게 보여줄 화면을 그려내는 <br />
          <span className="point_red">프론트</span>의 영역에 흥미를 느끼게
          됐습니다.
        </>
      }
    >
      <Timeline />
    </Section>
  );
}
