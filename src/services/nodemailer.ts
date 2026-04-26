import nodemailer from 'nodemailer';
import ContactType from '@/types/contact';

interface MatilOptionType {
  to: string;
  from: string;
  subject: string;
  html: string;
}

// HTML 이스케이프 함수 (XSS 방지)
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export function sendEmail({ email, name, content }: ContactType) {
  // 입력값 이스케이프 처리
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedContent = escapeHtml(content);

  const mailOptions: MatilOptionType = {
    to: process.env.GOOGLE_EMAIL || '',
    from: email,
    subject: `[RYUNGFOLIO] ${escapedName}`,
    html: `
      <pre>${escapedContent}</pre>
      <br />
      <p>보낸이 : ${escapedName} (${escapedEmail})</p>
    `,
  };
  return transporter.sendMail(mailOptions);
}
