import Section from '../common/Section';

export default function About() {
  return (
    <Section
      id="about"
      headlineText={
        <>
          저는 <span className="point_red">크리스마스</span>를 좋아하는
          이성령이라고 합니다
        </>
      }
      subheadlineText="매일 하루 하루가 크리스마스처럼 의미 있고 즐거웠으면 좋겠습니다"
    >
      <p>어바웃섹션</p>
    </Section>
  );
}
