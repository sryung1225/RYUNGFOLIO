import styles from '@/styles/work/Work.module.scss';
import Section from '../common/Section';
import ExperienceCard from './ExperienceCard';

export default function Work() {
  return (
    <Section
      id="work"
      name="업무 경험"
      headline={
        <>
          사용자에게 보여줄 화면을 구현하는 마크업을 넘어
          <br />
          직접 상호작용까지 할 수 있는
          <br />
          <span className="point_red">프론트엔드 개발자</span>에 도전하고
          있습니다.
        </>
      }
      subheadline={
        <>
          가장 중점을 두고 연구했던 웹 접근성에 자신감을 가집니다. <br />
          사용자에게 동적인 접근성을 부여함으로서 모두가 사용할 수 있는 서비스를
          만들고자 합니다.
        </>
      }
    >
      <ul className={styles.wrapper}>
        <ExperienceCard />
      </ul>
    </Section>
  );
}
