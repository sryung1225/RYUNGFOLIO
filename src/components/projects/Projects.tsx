import styles from '@/styles/components/projects/Projects.module.scss';
import Section from '../common/Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Section
      id="projects"
      name="프로젝트 기술"
      headline={
        <>다양한 구현과 기술 습득에 중점을 두며 프로젝트를 진행했습니다.</>
      }
    >
      <ul className={styles.wrapper}>
        <ProjectCard />
        <ProjectCard />
      </ul>
    </Section>
  );
}
