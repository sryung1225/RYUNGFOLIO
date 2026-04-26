/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { sendEmail } from '@/services/nodemailer';
import ContactType from '@/types/contact';

// 이메일 형식 검증
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 입력값 검증
function validateContactData(data: unknown): data is ContactType {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const { email, name, content } = data as Record<string, unknown>;

  return (
    typeof email === 'string' &&
    typeof name === 'string' &&
    typeof content === 'string' &&
    email.trim() !== '' &&
    name.trim() !== '' &&
    content.trim() !== '' &&
    isValidEmail(email)
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 입력값 검증
    if (!validateContactData(body)) {
      return NextResponse.json(
        { message: '올바른 형식으로 입력해주세요' },
        { status: 400 },
      );
    }

    await sendEmail(body);

    return NextResponse.json(
      { message: '전송 성공!\n곧 회신드릴게요' },
      { status: 200 },
    );
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return NextResponse.json(
      { message: '전송 실패\n잠시 후 다시 시도해주세요' },
      { status: 500 },
    );
  }
}
