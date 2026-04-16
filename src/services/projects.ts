import prisma from '@/lib/prisma';

async function getProjects() {
  try {
    return await prisma.project.findMany();
  } catch (error) {
    console.error('프로젝트 데이터 패칭 실패', error);
    return [];
  }
}

export async function getProjectDetail({ id }: { id: string }) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
      include: { posts: true, features: true },
    });
    return project;
  } catch (error) {
    console.error('개별 프로젝트 데이터 패칭 실패', error);
    return null;
  }
}

export default getProjects;
