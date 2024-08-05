import ContactType from '@/types/contact';

async function sendContactEmail(emailForm: ContactType) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청 실패');
  }
  return data;
}

export default sendContactEmail;
