import Section from '@/components/common/Section';
import styles from '@/styles/projects/Projects.module.scss';
import { ProjectType } from '@/types/project';
import getProjects from '@/services/projects';
import getTimestamp from '@/utills/getTimestamp';
import ProjectCard from './ProjectCard';

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();
  projects.sort((a, b) => {
    if (a.endDate === null && b.endDate === null) return 0;
    if (a.endDate === null) return -1;
    if (b.endDate === null) return 1;
    return getTimestamp(b.endDate) - getTimestamp(a.endDate);
  });

  return (
    projects && (
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </Section>
    )
  );
}
