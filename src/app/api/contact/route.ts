import { sendEmail } from '@/api/nodemailer';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: Request) {
  const body = await req.json();
  return sendEmail(body)
    .then(
      () =>
        new Response(
          JSON.stringify({
            message: '전송 성공!\n곧 회신드릴게요',
          }),
          {
            status: 200,
          },
        ),
    )
    .catch(() => {
      return new Response(
        JSON.stringify({
          message: '전송 실패\n잠시 후 다시 시도해주세요',
        }),
        {
          status: 500,
        },
      );
    });
}
