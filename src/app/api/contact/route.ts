import { sendEmail } from '@/api/nodemailer';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: Request) {
  const body = await req.json();
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일 전송 성공 😎' }), {
          status: 200,
        }),
    )
    .catch(() => {
      return new Response(JSON.stringify({ message: '메일 전송 실패 💩' }), {
        status: 500,
      });
    });
}
