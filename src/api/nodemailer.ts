import nodemailer from 'nodemailer';
import ContactType from '@/types/contact';

interface MatilOptionType {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
    pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
  },
});

export function sendEmail({ email, name, content }: ContactType) {
  const mailOptions: MatilOptionType = {
    to: process.env.NEXT_PUBLIC_GOOGLE_EMAIL || '',
    from: email,
    subject: `[RYUNGFOLIO] ${name}`,
    html: `
      <pre>${content}</pre>
      <br />
      <p>보낸이 : ${name} (${email})</p>
    `,
  };
  return transporter.sendMail(mailOptions);
}
