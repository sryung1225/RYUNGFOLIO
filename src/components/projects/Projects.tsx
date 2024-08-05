import styles from '@/styles/components/projects/Projects.module.scss';
import Section from '../common/Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Section
      id="projects"
      name="프로젝트 기술"
      headline={
        <>
          <span className="point_yellow">모든 사용자</span>를{' '}
          <span className="point_yellow">생각</span>하는 서비스 개발이라는
          목표를 위해 <br />
          꾸준하게 경험치를 쌓아올리고 있습니다. <br />
        </>
      }
      subheadline={
        <>
          다양한 프로젝트를 진행하며 완성도를 높이기 위해 상세하게 살펴보고
          <br />
          사용자의 관점에서 더 개선할 부분은 없을 지 고민하는 습관을 만들고
          있습니다. <br />
        </>
      }
    >
      <ul className={styles.wrapper}>
        <ProjectCard />
      </ul>
    </Section>
  );
}
