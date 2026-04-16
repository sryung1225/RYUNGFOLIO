import prisma from '@/lib/prisma';

async function getWorkExperiences() {
  try {
    return await prisma.work.findMany({
      include: { worksProjects: true },
    });
  } catch (error) {
    console.error('업무 경험 데이터 패칭 실패', error);
    return [];
  }
}

export default getWorkExperiences;
