import Image from 'next/image';
import getProjects from '@/api/projects';
import type { Project } from '@/types/project';
import Button from '@/components/common/Button';

export default async function Projects() {
  const projects: Project[] = await getProjects();
  console.log('프로젝트: ', projects);
  return (
    <main>
      <h1>project</h1>s
      <Button />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>
              {project.startDate} - {project.endDate}
            </p>
            <p>{project.skill}</p>
            <p>{project.member}</p>
            <p>{project.role}</p>
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={`${project.name} 대표 이미지`}
                width="800"
                height="300"
              />
            ) : (
              <p>대표 이미지 없음</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
