import getProjects from '@/services/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import { ProjectType } from '@/types/project';
import getTimestamp from '@/utills/getTimestamp';
import styles from '@/styles/components/projects/Projects.module.scss';

export default async function ProjectsPage() {
  const projects: ProjectType[] = await getProjects();
  projects.sort((a, b) => {
    if (a.endDate === null && b.endDate === null) return 0;
    if (a.endDate === null) return -1;
    if (b.endDate === null) return 1;
    return getTimestamp(b.endDate) - getTimestamp(a.endDate);
  });
  return (
    <main>
      <h1>PROJECTS</h1>
      <h2 className="a11yHidden">작업한 프로젝트 목록</h2>
      <ul className={styles.wrapper}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </main>
  );
}
