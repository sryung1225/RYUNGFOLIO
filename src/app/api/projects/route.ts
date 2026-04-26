/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import getProjects from '@/services/projects';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('프로젝트 목록 조회 실패:', error);
    return NextResponse.json(
      { error: '프로젝트 목록을 불러오는데 실패했습니다' },
      { status: 500 },
    );
  }
}
