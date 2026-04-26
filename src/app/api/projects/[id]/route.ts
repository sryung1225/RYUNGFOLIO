/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { getProjectDetail } from '@/services/projects';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const project = await getProjectDetail({ id: params.id });

    if (!project) {
      return NextResponse.json(
        { error: '프로젝트를 찾을 수 없습니다' },
        { status: 404 },
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('프로젝트 상세 조회 실패:', error);
    return NextResponse.json(
      { error: '프로젝트 상세 정보를 불러오는데 실패했습니다' },
      { status: 500 },
    );
  }
}
