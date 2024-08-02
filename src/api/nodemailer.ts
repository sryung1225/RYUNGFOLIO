import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
    pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
  },
});

export default transporter;
