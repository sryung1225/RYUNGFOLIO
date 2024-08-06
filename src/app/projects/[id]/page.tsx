import Image from 'next/image';
import { getProjectDetail } from '@/services/projects';
import type { ProjectType } from '@/types/project';

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params;
  const project: ProjectType = await getProjectDetail(id);
  console.log('프로젝트 개별 데이터: ', project);
  return (
    <section>
      <h2>{project.title}</h2>
      <p>
        {project.startDate} - {project.endDate}
      </p>
      <p>{project.skills}</p>
      <p>{project.member}</p>
      <p>{project.role}</p>
      <Image
        src={project.thumbnail || '/img/dummy.jpg'}
        alt={`${project.title} 대표 이미지`}
        width="800"
        height="300"
        priority
      />
    </section>
  );
}
