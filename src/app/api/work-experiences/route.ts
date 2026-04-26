/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import getWorkExperiences from '@/services/workExperiences';

export async function GET() {
  try {
    const workExperiences = await getWorkExperiences();
    return NextResponse.json(workExperiences, { status: 200 });
  } catch (error) {
    console.error('업무 경험 조회 실패:', error);
    return NextResponse.json(
      { error: '업무 경험을 불러오는데 실패했습니다' },
      { status: 500 },
    );
  }
}
