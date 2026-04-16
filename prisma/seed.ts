import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 초기화
  await prisma.post.deleteMany();
  await prisma.feature.deleteMany();
  await prisma.workProject.deleteMany();
  await prisma.project.deleteMany();
  await prisma.work.deleteMany();

  // ===== 프로젝트 데이터 =====
  // TODO: Supabase에서 백업한 데이터로 채우기

  // ===== 업무 경험 데이터 =====
  // TODO: Supabase에서 백업한 데이터로 채우기

  console.log('시드 데이터 삽입 완료');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
